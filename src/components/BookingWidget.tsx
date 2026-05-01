"use client";

import { useState, useEffect, useRef } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { fleetCollection, bookingsCollection } from "@/lib/firebase";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, ArrowRightLeft, ArrowRight, Car as CarIcon, CheckCircle2 } from "lucide-react";

const libraries: "places"[] = ["places"];
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
const WHATSAPP_NUMBER = "+919724945267";

type CarData = {
  id: string;
  name: string;
  color: string;
  ratePerKm: number;
  imageUrl: string;
};

export function BookingWidget() {
  const { t } = useLanguage();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
    region: "IN",
  });

  const [fleet, setFleet] = useState<CarData[]>([]);
  const [selectedCar, setSelectedCar] = useState<CarData | null>(null);

  const [pickup] = useState("Ahmedabad, Gujarat, India");
  const [dropoff, setDropoff] = useState("");
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [distance, setDistance] = useState<number>(0);
  const [phone, setPhone] = useState("");
  const [loadingDistance, setLoadingDistance] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    const fetchFleet = async () => {
      try {
        const snap = await getDocs(fleetCollection);
        const cars = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as CarData));
        setFleet(cars);
        if (cars.length > 0) setSelectedCar(cars[0]);
      } catch (error) {
        console.error("Failed to fetch fleet", error);
      }
    };
    fetchFleet();
  }, []);

  const calculateDistance = () => {
    if (!dropoff || !isLoaded || !window.google) return;
    setLoadingDistance(true);

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [pickup],
        destinations: [dropoff],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        setLoadingDistance(false);
        if (status === "OK" && response && response.rows[0].elements[0].status === "OK") {
          const distInMeters = response.rows[0].elements[0].distance.value;
          setDistance(Math.ceil(distInMeters / 1000));
        } else {
          setDistance(0);
        }
      }
    );
  };

  const handlePlaceChanged = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();
      if (place && place.formatted_address) {
        setDropoff(place.formatted_address);
      }
    }
  };

  // Recalculate distance when dropoff changes
  useEffect(() => {
    if (dropoff) calculateDistance();
  }, [dropoff]);

  const totalKm = tripType === "round-trip" ? distance * 2 : distance;
  const estimatedFare = selectedCar ? totalKm * selectedCar.ratePerKm : 0;

  const isPhoneValid = phone.replace(/\D/g, "").length === 10;
  const isFormValid = !!dropoff && !!selectedCar && distance > 0 && isPhoneValid;

  const handleConfirmBooking = async () => {
    if (!isFormValid) {
      alert(t.alertFillFields);
      return;
    }

    setBookingLoading(true);
    try {
      await addDoc(bookingsCollection, {
        pickup,
        dropoff,
        tripType,
        distance: totalKm,
        carName: selectedCar!.name,
        fare: estimatedFare,
        phone,
        timestamp: serverTimestamp(),
      });

      // Construct WhatsApp message
      const message = `*New Booking Request - ${t.brandName}*%0A%0A*Route:* ${pickup} to ${dropoff}%0A*Type:* ${tripType === 'one-way' ? t.oneWay : t.roundTrip}%0A*Distance:* ${totalKm} km%0A*Car:* ${selectedCar!.name} (${selectedCar!.color})%0A*Est. Fare:* ₹${estimatedFare}%0A*Customer Phone:* ${phone}`;

      const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      window.open(waLink, "_blank");

      // Reset
      setDropoff("");
      setPhone("");
      setDistance(0);
    } catch (error) {
      console.error("Booking error:", error);
      alert(t.alertBookingFailed);
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div className="bg-dark-card/60 backdrop-blur-2xl border border-dark-border/50 p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-2xl mx-auto text-left">

      {/* Trip Type Toggle */}
      <div className="flex p-1.5 bg-black/40 rounded-xl mb-8 border border-dark-border/50 shadow-inner">
        <button
          onClick={() => setTripType("one-way")}
          className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex justify-center items-center gap-2 ${tripType === "one-way" ? "bg-gradient-to-r from-gold to-yellow-500 text-black shadow-lg" : "text-gray-400 hover:text-white"
            }`}
        >
          <ArrowRight className="w-4 h-4" /> {t.oneWay}
        </button>
        <button
          onClick={() => setTripType("round-trip")}
          className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex justify-center items-center gap-2 ${tripType === "round-trip" ? "bg-gradient-to-r from-gold to-yellow-500 text-black shadow-lg" : "text-gray-400 hover:text-white"
            }`}
        >
          <ArrowRightLeft className="w-4 h-4" /> {t.roundTrip}
        </button>
      </div>

      {/* Locations */}
      <div className="space-y-6 mb-10 relative">
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-gold/50 to-dark-border z-0"></div>

        <div className="relative z-10 flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center shrink-0 shadow-md">
            <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
          </div>
          <div className="flex-1">
            <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-widest font-bold">{t.pickupCity}</label>
            <input
              type="text"
              value={t.pickupLocationFixed}
              disabled
              className="w-full bg-transparent text-white text-lg font-medium outline-none cursor-not-allowed opacity-80"
            />
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center shrink-0 shadow-md">
            <MapPin className="w-5 h-5 text-gold" />
          </div>
          <div className="flex-1">
            <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-widest font-bold">{t.dropoffCity}</label>
            {isLoaded ? (
              <Autocomplete
                onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
                onPlaceChanged={handlePlaceChanged}
                options={{ componentRestrictions: { country: "in" } }}
              >
                <input
                  type="text"
                  placeholder={t.enterDropoff}
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full bg-transparent text-white text-lg font-medium outline-none placeholder:text-gray-600 focus:border-b-2 focus:border-gold transition-colors pb-1"
                />
              </Autocomplete>
            ) : (
              <input type="text" disabled placeholder={t.loadingMaps} className="w-full bg-transparent text-gray-500 text-lg pb-1" />
            )}
          </div>
        </div>
      </div>

      {/* Car Selection */}
      <div className="mb-10">
        <label className="block text-xs text-gray-400 mb-4 uppercase tracking-widest font-bold">{t.selectCar}</label>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
          {fleet.length === 0 ? (
            <div className="text-gray-500 text-sm flex items-center gap-2"><CarIcon className="w-4 h-4" /> {t.noCarsAvailable}</div>
          ) : (
            fleet.map((car) => (
              <div
                key={car.id}
                onClick={() => setSelectedCar(car)}
                className={`shrink-0 w-48 rounded-2xl border p-3 cursor-pointer transition-all duration-300 snap-start relative overflow-hidden group ${selectedCar?.id === car.id
                    ? "border-gold bg-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                    : "border-dark-border/50 bg-black/40 hover:border-gray-500 hover:bg-dark-bg"
                  }`}
              >
                {selectedCar?.id === car.id && (
                  <div className="absolute top-2 right-2 bg-black rounded-full p-0.5 z-10">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                  </div>
                )}
                <div className="h-28 mb-3 rounded-xl overflow-hidden bg-black/60 relative">
                  <img src={car.imageUrl} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="font-semibold text-white truncate px-1">{car.name}</h4>
                <div className="flex justify-between items-center mt-2 px-1">
                  <span className="text-xs text-gray-400 truncate">{car.color}</span>
                  <span className="text-sm text-gold font-bold">₹{car.ratePerKm}/km</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Summary & Checkout */}
      <div className="border-t border-dark-border/50 pt-8">
        <div className="flex justify-between items-end mb-6">
          <div>
            <label className="block text-xs text-gray-400 mb-2 uppercase tracking-widest font-bold">{t.estimatedFare}</label>
            <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              {loadingDistance ? (
                <span className="text-2xl text-gold animate-pulse">{t.calculating}</span>
              ) : distance > 0 ? (
                <>₹{estimatedFare.toLocaleString('en-IN')} <span className="text-lg font-medium text-gray-500 ml-2">({totalKm} km)</span></>
              ) : (
                <span className="text-2xl text-gray-600">--</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-col sm:flex-row mt-6">
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone className={`h-5 w-5 transition-colors ${isPhoneValid ? "text-gold" : "text-gray-500 group-focus-within:text-white"}`} />
            </div>
            <input
              type="tel"
              placeholder={t.enterPhone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full pl-12 pr-4 py-3.5 border border-dark-border/80 rounded-xl bg-black/50 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-all sm:text-base font-medium shadow-inner"
            />
          </div>
          <button
            onClick={handleConfirmBooking}
            disabled={bookingLoading || !isFormValid}
            className={`px-8 py-3.5 rounded-xl font-bold transition-all duration-500 whitespace-nowrap text-base ${isFormValid
                ? "bg-gradient-to-r from-gold to-yellow-500 text-black shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] hover:scale-[1.02]"
                : "bg-dark-bg text-gray-500 border border-dark-border cursor-not-allowed opacity-70"
              }`}
          >
            {bookingLoading ? t.processing : t.confirmBooking}
          </button>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
