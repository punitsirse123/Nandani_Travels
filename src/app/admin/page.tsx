"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage, fleetCollection, bookingsCollection } from "@/lib/firebase";
import { Car, Image as ImageIcon, IndianRupee, Trash2, Edit } from "lucide-react";

type CarData = {
  id: string;
  name: string;
  color: string;
  ratePerKm: number;
  imageUrl: string;
};

type BookingData = {
  id: string;
  pickup: string;
  dropoff: string;
  tripType: string;
  distance: number;
  carName: string;
  fare: number;
  phone: string;
  timestamp: any;
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"fleet" | "bookings">("fleet");
  
  // Fleet State
  const [fleet, setFleet] = useState<CarData[]>([]);
  const [loadingFleet, setLoadingFleet] = useState(true);
  const [editingCarId, setEditingCarId] = useState<string | null>(null);
  const [deletingCarId, setDeletingCarId] = useState<string | null>(null);
  
  const [newCarName, setNewCarName] = useState("");
  const [newCarColor, setNewCarColor] = useState("");
  const [newCarRate, setNewCarRate] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // Booking State
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(true);

  useEffect(() => {
    fetchFleet();
    fetchBookings();
  }, []);

  const fetchFleet = async () => {
    setLoadingFleet(true);
    try {
      const snapshot = await getDocs(fleetCollection);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CarData));
      setFleet(data);
    } catch (error) {
      console.error("Error fetching fleet:", error);
    } finally {
      setLoadingFleet(false);
    }
  };

  const fetchBookings = async () => {
    setLoadingBookings(true);
    try {
      const q = query(bookingsCollection, orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BookingData));
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoadingBookings(false);
    }
  };

  const handleEditClick = (car: CarData) => {
    setEditingCarId(car.id);
    setNewCarName(car.name);
    setNewCarColor(car.color);
    setNewCarRate(car.ratePerKm.toString());
    setImageFile(null);
  };

  const handleCancelEdit = () => {
    setEditingCarId(null);
    setNewCarName("");
    setNewCarColor("");
    setNewCarRate("");
    setImageFile(null);
  };

  const handleSaveCar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCarName || !newCarRate || !newCarColor) {
      alert("Please fill all required text fields.");
      return;
    }
    
    if (!editingCarId && !imageFile) {
      alert("Please select an image for the new car.");
      return;
    }

    setUploading(true);
    try {
      let imageUrl = "";

      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        
        if (!uploadRes.ok) {
          const errData = await uploadRes.json();
          throw new Error(errData.error || "Upload failed");
        }
        
        const resData = await uploadRes.json();
        imageUrl = resData.imageUrl;
      }

      if (editingCarId) {
        // Update existing
        const updateData: any = {
          name: newCarName,
          color: newCarColor,
          ratePerKm: Number(newCarRate),
        };
        if (imageUrl) {
          updateData.imageUrl = imageUrl;
        }
        await updateDoc(doc(db, "fleet", editingCarId), updateData);
      } else {
        // Add new
        await addDoc(fleetCollection, {
          name: newCarName,
          color: newCarColor,
          ratePerKm: Number(newCarRate),
          imageUrl,
        });
      }

      handleCancelEdit();
      fetchFleet();
    } catch (error: any) {
      console.error("Error saving car:", error);
      alert(`Failed to save car. Error: ${error.message || "Unknown error"}. Check Firestore permissions.`);
    } finally {
      setUploading(false);
    }
  };

  const confirmDeleteCar = async (id: string) => {
    try {
      await deleteDoc(doc(db, "fleet", id));
      setDeletingCarId(null);
      fetchFleet();
    } catch (error: any) {
      console.error("Error deleting car:", error);
      alert(`Failed to delete car. Error: ${error.message || "Unknown error"}.`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex border-b border-dark-border mb-6">
        <button
          className={`px-6 py-3 font-semibold transition ${
            activeTab === "fleet" ? "text-gold border-b-2 border-gold" : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("fleet")}
        >
          Fleet Management
        </button>
        <button
          className={`px-6 py-3 font-semibold transition ${
            activeTab === "bookings" ? "text-gold border-b-2 border-gold" : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("bookings")}
        >
          Booking Log
        </button>
      </div>

      {activeTab === "fleet" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-dark-card p-6 rounded-xl border border-dark-border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">
                {editingCarId ? "Edit Car" : "Add New Car"}
              </h3>
              {editingCarId && (
                <button onClick={handleCancelEdit} className="text-sm text-gray-400 hover:text-white transition">
                  Cancel Edit
                </button>
              )}
            </div>
            
            <form onSubmit={handleSaveCar} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Car Name</label>
                <input
                  type="text"
                  value={newCarName}
                  onChange={(e) => setNewCarName(e.target.value)}
                  className="w-full bg-dark-bg border border-dark-border rounded px-3 py-2 text-white focus:border-gold"
                  placeholder="e.g., Innova Crysta"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Color</label>
                <input
                  type="text"
                  value={newCarColor}
                  onChange={(e) => setNewCarColor(e.target.value)}
                  className="w-full bg-dark-bg border border-dark-border rounded px-3 py-2 text-white focus:border-gold"
                  placeholder="e.g., Pearl White"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Rate per KM (₹)</label>
                <input
                  type="number"
                  value={newCarRate}
                  onChange={(e) => setNewCarRate(e.target.value)}
                  className="w-full bg-dark-bg border border-dark-border rounded px-3 py-2 text-white focus:border-gold"
                  placeholder="e.g., 15"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Car Image {editingCarId && <span className="text-xs text-gray-500">(Leave blank to keep current)</span>}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className="w-full bg-dark-bg border border-dark-border rounded px-3 py-2 text-gray-400 focus:border-gold"
                />
              </div>
              <button
                type="submit"
                disabled={uploading}
                className="w-full bg-gold text-black font-semibold py-2 rounded hover:bg-gold-hover transition disabled:opacity-50 mt-2"
              >
                {uploading ? "Saving..." : (editingCarId ? "Update Car" : "Save Car")}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-white">Current Fleet</h3>
            {loadingFleet ? (
              <p className="text-gray-400">Loading fleet...</p>
            ) : fleet.length === 0 ? (
              <p className="text-gray-400">No cars found. Add some to get started.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fleet.map((car) => (
                  <div key={car.id} className={`bg-dark-card border rounded-xl p-4 flex gap-4 items-center transition-colors ${editingCarId === car.id ? 'border-gold bg-gold/5' : 'border-dark-border'}`}>
                    <img src={car.imageUrl} alt={car.name} className="w-24 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{car.name}</h4>
                      <p className="text-sm text-gray-400">Color: {car.color}</p>
                      <p className="text-sm text-gold">₹{car.ratePerKm} / km</p>
                    </div>
                    <div className="flex gap-1 flex-col sm:flex-row items-center">
                      <button
                        onClick={() => handleEditClick(car)}
                        className="p-2 text-blue-500 hover:bg-blue-500/10 rounded transition"
                        title="Edit Car"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      
                      {deletingCarId === car.id ? (
                        <div className="flex flex-col gap-1 ml-2">
                          <button
                            onClick={() => confirmDeleteCar(car.id)}
                            className="text-[10px] bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded font-bold uppercase tracking-wider"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => setDeletingCarId(null)}
                            className="text-[10px] bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded font-bold uppercase tracking-wider"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeletingCarId(car.id)}
                          className="p-2 text-red-500 hover:bg-red-500/10 rounded transition"
                          title="Delete Car"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "bookings" && (
        <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-dark-bg border-b border-dark-border">
                  <th className="p-4 text-gray-400 font-medium">Date</th>
                  <th className="p-4 text-gray-400 font-medium">Customer</th>
                  <th className="p-4 text-gray-400 font-medium">Route</th>
                  <th className="p-4 text-gray-400 font-medium">Car</th>
                  <th className="p-4 text-gray-400 font-medium">Est. Fare</th>
                </tr>
              </thead>
              <tbody>
                {loadingBookings ? (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-gray-400">Loading bookings...</td>
                  </tr>
                ) : bookings.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-gray-400">No bookings yet.</td>
                  </tr>
                ) : (
                  bookings.map((b) => (
                    <tr key={b.id} className="border-b border-dark-border hover:bg-dark-bg/50">
                      <td className="p-4 text-sm text-gray-300">
                        {b.timestamp?.toDate ? b.timestamp.toDate().toLocaleString() : 'N/A'}
                      </td>
                      <td className="p-4 text-sm text-white">{b.phone}</td>
                      <td className="p-4 text-sm text-gray-300">
                        <div className="font-medium text-white">{b.pickup} ➔ {b.dropoff}</div>
                        <div className="text-xs text-gray-500">{b.tripType} • {b.distance} km</div>
                      </td>
                      <td className="p-4 text-sm text-gray-300">{b.carName}</td>
                      <td className="p-4 text-sm text-gold font-semibold">₹{b.fare}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
