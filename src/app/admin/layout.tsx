"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

const ADMIN_EMAIL = "punitsirse@gmail.com";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (!currentUser && pathname !== "/admin/login") {
        router.push("/admin/login");
      } else if (currentUser && currentUser.email !== ADMIN_EMAIL) {
        // Not the admin
        auth.signOut();
        alert("Unauthorized access. Admin only.");
        router.push("/admin/login");
      } else if (currentUser && currentUser.email === ADMIN_EMAIL && pathname === "/admin/login") {
        router.push("/admin");
      }
    });

    return () => unsubscribe();
  }, [router, pathname]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
      </div>
    );
  }

  // Prevent rendering if not logged in and not on login page
  if (!user && pathname !== "/admin/login") return null;

  return (
    <div className="flex-1 flex flex-col bg-dark-bg min-h-screen">
      {user && pathname !== "/admin/login" && (
        <nav className="border-b border-dark-border bg-dark-card p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gold">Nandani Travels - Admin</h1>
          <button
            onClick={() => auth.signOut()}
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Sign Out
          </button>
        </nav>
      )}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">{children}</main>
    </div>
  );
}
