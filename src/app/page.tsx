import Link from "next/link";
import { ArrowRight, BookOpen, MessageSquare, Send } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { getActiveConsultation } from "@/config/consultations";

export default function HomePage() {
  const c = getActiveConsultation();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-pusa-navy text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pusa-orange blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-pusa-orange" />
              PUSA Student Participation Platform
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Your Voice <span className="text-pusa-orange">Matters.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              Participate in PUSA public consultations and help shape
              student-centered recommendations.
            </p>

            <p className="mt-4 text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
              Pwani University Students Association (PUSA) provides this
              platform to collect students&apos; views on matters affecting the
              student community and to use those views in preparing
              recommendations for consideration by the appropriate University
              structures.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <ButtonLink href="/consultation" size="lg" variant="primary">
                Participate Now <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink href="/how-it-works" size="lg" variant="outline">
                Learn More
              </ButtonLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-white/60">
              <span>Student Voice</span>
              <span className="text-pusa-orange">→</span>
              <span>Public Participation</span>
              <span className="text-pusa-orange">→</span>
              <span>Evidence</span>
              <span className="text-pusa-orange">→</span>
              <span>Representation</span>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT CONSULTATION */}
      <section className="bg-pusa-blueLight py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-pusa-navy">
              Current Consultation
            </h2>
            <p className="mt-2 text-pusa-gray">
              Share your views on a matter currently under consultation.
            </p>
          </div>

          <Card className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <Badge tone={c.status}>{c.status}</Badge>
                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-pusa-navy">
                  {c.title}
                </h3>
                <p className="mt-3 text-pusa-charcoal/80 leading-relaxed">
                  {c.description}
                </p>
                <p className="mt-4 text-sm text-pusa-gray">
                  Participation takes approximately{" "}
                  <strong className="text-pusa-navy">
                    {c.estimatedMinutes}–3 minutes
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <ButtonLink href="/consultation" size="lg">
                Share Your Views <ArrowRight size={18} />
              </ButtonLink>
            </div>
          </Card>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-pusa-navy text-center">
            How It Works
          </h2>
          <p className="mt-2 text-pusa-gray text-center max-w-xl mx-auto">
            Three simple steps to contribute your voice.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", t: "Read", d: "Understand the issue being consulted on.", Icon: BookOpen },
              { n: "2", t: "Respond", d: "Share your views through the questionnaire.", Icon: MessageSquare },
              { n: "3", t: "Contribute", d: "Your response contributes to PUSA's consultation report.", Icon: Send },
            ].map(({ n, t, d, Icon }) => (
              <Card key={n} className="p-6">
                <div className="w-12 h-12 rounded-full bg-pusa-blueLight text-pusa-navy flex items-center justify-center font-bold text-lg">
                  {n}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Icon size={18} className="text-pusa-orange" />
                  <h3 className="font-bold text-pusa-navy">{t}</h3>
                </div>
                <p className="mt-2 text-sm text-pusa-gray leading-relaxed">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTICIPATE */}
      <section className="bg-pusa-blueLight py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-pusa-navy text-center">
            Why Participate?
          </h2>
          <p className="mt-2 text-pusa-gray text-center max-w-xl mx-auto">
            Your input helps PUSA represent students with evidence.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Student Voice",
                d: "Create an opportunity for students to communicate their views.",
              },
              {
                t: "Evidence-Based Representation",
                d: "Help PUSA understand the views of the student community.",
              },
              {
                t: "Constructive Engagement",
                d: "Support informed engagement between students and relevant University structures.",
              },
            ].map(({ t, d }) => (
              <Card key={t} className="p-6">
                <div className="w-10 h-1 rounded bg-pusa-orange mb-4" />
                <h3 className="font-bold text-pusa-navy text-lg">{t}</h3>
                <p className="mt-2 text-sm text-pusa-gray leading-relaxed">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}