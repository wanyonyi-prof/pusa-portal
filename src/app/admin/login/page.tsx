"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setErr("Incorrect password.");
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-white p-8 rounded-card border border-pusa-border shadow-card"
      >
        <h1 className="text-2xl font-extrabold text-pusa-navy">
          PUSA Admin
        </h1>
        <p className="mt-1 text-sm text-pusa-gray">
          Authorised administrators only.
        </p>

        <label
          htmlFor="pw"
          className="block mt-6 text-sm font-semibold text-pusa-navy"
        >
          Password
        </label>
        <input
          id="pw"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="mt-2 w-full px-4 py-3 rounded-lg border border-pusa-border focus:border-pusa-orange"
          autoFocus
        />
        {err && <p className="mt-2 text-sm text-red-600">{err}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full py-3 rounded-lg bg-pusa-navy text-white font-semibold hover:bg-pusa-blue disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
}