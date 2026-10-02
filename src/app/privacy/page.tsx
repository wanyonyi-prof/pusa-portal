export const metadata = { title: "Privacy Notice — PUSA Portal" };

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-pusa-navy">
        Privacy Notice
      </h1>

      <div className="mt-6 space-y-5 text-pusa-charcoal/85 leading-relaxed">
        <p>
          Information submitted through this consultation will be used for the
          purposes of collecting and analysing student views for the PUSA
          public participation exercise.
        </p>
        <p>
          Responses are handled securely and only accessed by authorised PUSA
          administrators. Individual responses are not published publicly.
        </p>
        <p>
          We do not collect unnecessary personal information. No name,
          registration number, email, or phone number is required to
          participate.
        </p>
        <p>
          Aggregated and anonymised findings may be included in reports
          prepared by PUSA for consideration by the appropriate University
          structures.
        </p>
        <p>
          If you have questions about how your response is handled, contact{" "}
          <a
            href="mailto:info@pusa.ac.ke"
            className="text-pusa-orange font-semibold hover:underline"
          >
            info@pusa.ac.ke
          </a>
          .
        </p>
      </div>
    </div>
  );
}