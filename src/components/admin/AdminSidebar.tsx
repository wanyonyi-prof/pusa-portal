"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BarChart3, Table2, LogOut } from "lucide-react";

const items = [
  { href: "/admin", label: "Overview", Icon: BarChart3 },
  { href: "/admin/responses", label: "Responses", Icon: Table2 },
];

export default function AdminSidebar() {
  const path = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="w-full md:w-56 shrink-0">
      <div className="bg-white rounded-card border border-pusa-border p-4 shadow-card">
        <div className="px-3 py-2 text-xs font-bold uppercase tracking-wide text-pusa-gray">
          PUSA Admin
        </div>
        <nav className="mt-2 space-y-1">
          {items.map(({ href, label, Icon }) => {
            const active =
              href === "/admin" ? path === "/admin" : path?.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-pusa-navy text-white"
                    : "text-pusa-charcoal hover:bg-pusa-blueLight"
                }`}
              >
                <Icon size={16} /> {label}
              </Link>
            );
          })}
          <button
            onClick={logout}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </nav>
      </div>
    </aside>
  );
}