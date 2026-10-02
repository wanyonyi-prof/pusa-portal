export const metadata = { title: "How It Works — PUSA Portal" };

export default function HowItWorksPage() {
  const steps = [
    {
      n: "1",
      t: "Read the consultation",
      d: "Open the current consultation on the Home or Current Consultation page and read what is being consulted on. The description explains what PUSA is trying to understand and why.",
    },
    {
      n: "2",
      t: "Respond to the questionnaire",
      d: "Complete the short multi-step questionnaire. Most consultations take 2–3 minutes. Your answers are submitted anonymously — no names or registration numbers are required.",
    },
    {
      n: "3",
      t: "Contribute to the report",
      d: "PUSA analysts review aggregated responses and use them to prepare a report for consideration by the appropriate University structures. Individual responses are not published publicly.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-pusa-navy">
        How It Works
      </h1>
      <p className="mt-3 text-pusa-gray max-w-2xl">
        PUSA&apos;s public participation platform is designed to be simple,
        fast, and transparent. Here&apos;s how your voice becomes part of the
        consultation.
      </p>

      <ol className="mt-10 space-y-6">
        {steps.map((s) => (
          <li
            key={s.n}
            className="flex gap-4 p-6 rounded-card bg-white border border-pusa-border shadow-card"
          >
            <div className="w-10 h-10 shrink-0 rounded-full bg-pusa-navy text-white flex items-center justify-center font-bold">
              {s.n}
            </div>
            <div>
              <h2 className="font-bold text-pusa-navy text-lg">{s.t}</h2>
              <p className="mt-1.5 text-pusa-gray leading-relaxed">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 p-6 rounded-card bg-pusa-blueLight border border-pusa-border">
        <h3 className="font-bold text-pusa-navy">Important note</h3>
        <p className="mt-2 text-sm text-pusa-charcoal/80 leading-relaxed">
          This platform collects students&apos; views. It is not a binding
          referendum and does not automatically determine University policy.
          PUSA uses the responses to prepare evidence-based recommendations for
          the appropriate University structures.
        </p>
      </div>
    </div>
  );
}