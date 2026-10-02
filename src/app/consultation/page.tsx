import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { getActiveConsultation } from "@/config/consultations";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Current Consultation — PUSA Portal" };

export default function ConsultationPage() {
  const c = getActiveConsultation();
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <Badge tone={c.status}>{c.status}</Badge>
      <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-pusa-navy leading-tight">
        {c.title}
      </h1>
      <p className="mt-4 text-pusa-charcoal/85 leading-relaxed">
        {c.description}
      </p>
      <p className="mt-4 text-sm text-pusa-gray">
        Participation takes approximately{" "}
        <strong className="text-pusa-navy">
          {c.estimatedMinutes}–3 minutes
        </strong>
        .
      </p>

      <Card className="mt-8 p-6 bg-pusa-blueLight border-pusa-border">
        <h2 className="font-bold text-pusa-navy">Before you begin</h2>
        <ul className="mt-3 space-y-2 text-sm text-pusa-charcoal/80 list-disc pl-5">
          <li>Your response is anonymous — no name or registration number is collected.</li>
          <li>There are no right or wrong answers. Share what you genuinely think.</li>
          <li>You can go back and edit your answers before submitting.</li>
          <li>Your response will contribute to the PUSA consultation report.</li>
        </ul>
      </Card>

      <div className="mt-8">
        <ButtonLink href="/consultation/questionnaire" size="lg">
          Start Questionnaire <ArrowRight size={18} />
        </ButtonLink>
      </div>
    </div>
  );
}