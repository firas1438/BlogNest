"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode, useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/dashboard-sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { status } = useSession();
  const router = useRouter();

  // redirect user to login page if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/unauthorized");
    }
  }, [status, router]);

  // loading screen
  if (status !== "authenticated") {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="animate-pulse">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-auto">
        {/* page content */}
        <main className="p-5">
          {children}
        </main>
      </div>
    </div>
  );
}