import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-pusa-navy text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/pusa-logo.png"
                alt="PUSA Logo"
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <div className="font-extrabold text-base">PUSA</div>
                <div className="text-xs text-white/70">
                  Pwani University Students Association
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-md">
              A student-led public participation platform for collecting and
              analysing students&apos; views on matters affecting the student
              community at Pwani University.
            </p>
          </div>

          {/* Explore column */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <Link href="/" className="hover:text-pusa-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/consultation"
                  className="hover:text-pusa-orange transition-colors"
                >
                  Current Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-pusa-orange transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-pusa-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-pusa-orange transition-colors"
                >
                  Privacy Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Links column */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Links
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a
                  href="https://www.pu.ac.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pusa-orange transition-colors"
                >
                  Pwani University
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-pusa-orange transition-colors"
                >
                  PUSA Website
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pusa.ac.ke"
                  className="hover:text-pusa-orange transition-colors"
                >
                  info@pusa.ac.ke
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pusa.ac.ke?subject=Data%20Protection%20Enquiry"
                  className="hover:text-pusa-orange transition-colors"
                >
                  Data Protection Enquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Pwani University Students Association
            (PUSA). All rights reserved.
          </div>
          <div className="sm:text-right">
            This is a PUSA student participation platform, not an official
            University Management portal.
          </div>
        </div>
      </div>
    </footer>
  );
}