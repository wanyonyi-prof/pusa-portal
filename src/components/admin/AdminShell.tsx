"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const isLogin = path?.startsWith("/admin/login");

  if (isLogin) return <>{children}</>;

  return (
    <div className="min-h-[70vh] bg-pusa-blueLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">{children}</div>
    </div>
  );
}