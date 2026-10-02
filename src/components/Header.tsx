"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/consultation", label: "Current Consultation" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-pusa-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/pusa-logo.png"
              alt="PUSA Logo"
              width={50}
              height={50}
              className="w-11 h-11 rounded-full object-cover shrink-0"
              priority
            />
            <div className="leading-tight">
              <div className="font-extrabold text-pusa-navy text-base sm:text-lg">
                PUSA
              </div>
              <div className="text-[11px] sm:text-xs text-pusa-gray">
                Pwani University Students Association
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-pusa-charcoal hover:text-pusa-orange transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              className="ml-2 px-4 py-2 rounded-lg bg-pusa-orange text-white text-sm font-semibold hover:bg-pusa-orangeDark transition-colors"
            >
              Participate
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-pusa-blueLight"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm font-medium text-pusa-charcoal hover:bg-pusa-blueLight"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg bg-pusa-orange text-white text-sm font-semibold text-center"
            >
              Participate Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}