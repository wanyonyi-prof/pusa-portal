import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = { title: "Thank You — PUSA Portal" };

export default function SuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-6">
        <CheckCircle2 size={32} />
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-pusa-navy">
        Thank You for Participating
      </h1>
      <p className="mt-4 text-lg text-pusa-charcoal font-medium">
        Your response has been successfully submitted to PUSA.
      </p>
      <p className="mt-3 text-pusa-gray leading-relaxed max-w-lg mx-auto">
        Your contribution will form part of the student views collected through
        this public participation exercise.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-pusa-navy text-white font-semibold hover:bg-pusa-blue transition-colors"
      >
        Return to PUSA Portal
      </Link>
    </div>
  );
}