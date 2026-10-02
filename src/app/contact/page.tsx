export const metadata = { title: "Contact — PUSA Portal" };

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-pusa-navy">
        Contact PUSA
      </h1>
      <p className="mt-3 text-pusa-gray">
        For questions about this consultation or the PUSA public participation
        platform, reach out to us.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="p-6 rounded-card border border-pusa-border bg-white shadow-card">
          <h2 className="font-bold text-pusa-navy">Email</h2>
          <p className="mt-2 text-sm text-pusa-gray">General enquiries</p>
          <a
            href="mailto:info@pusa.ac.ke"
            className="mt-2 inline-block text-pusa-orange font-semibold hover:underline"
          >
            info@pusa.ac.ke
          </a>
        </div>
        <div className="p-6 rounded-card border border-pusa-border bg-white shadow-card">
          <h2 className="font-bold text-pusa-navy">Pwani University</h2>
          <p className="mt-2 text-sm text-pusa-gray">
            Main campus, Kilifi, Kenya
          </p>
          <a
            href="https://www.pu.ac.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-pusa-orange font-semibold hover:underline"
          >
            www.pu.ac.ke
          </a>
        </div>
      </div>
    </div>
  );
}