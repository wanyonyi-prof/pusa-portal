"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Consultation } from "@/config/consultations";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { SelectField } from "@/components/form/SelectField";
import { RadioOption } from "@/components/form/RadioOption";
import { TextAreaField } from "@/components/form/TextAreaField";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { submitResponse } from "@/lib/dataProvider";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";

type Answers = Record<string, string>;

export default function QuestionnaireForm({
  consultation,
}: {
  consultation: Consultation;
}) {
  const router = useRouter();
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = consultation.steps.length + 1;
  const isReview = stepIdx === consultation.steps.length;
  const currentStep = consultation.steps[stepIdx];

  const setAnswer = (id: string, value: string) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    setErrors((e) => ({ ...e, [id]: "" }));
  };

  const validateStep = (): boolean => {
    if (isReview) return true;
    const next: Record<string, string> = {};
    for (const q of currentStep.questions) {
      const v = answers[q.id]?.trim() ?? "";
      if (q.required && !v) {
        next[q.id] = "This field is required.";
      } else if (q.type === "textarea" && v.length > 2000) {
        next[q.id] = "Please keep your response under 2000 characters.";
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (!validateStep()) return;
    setStepIdx((i) => Math.min(i + 1, totalSteps - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setStepIdx((i) => Math.max(i - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = async () => {
    if (!validateStep()) return;
    setSubmitting(true);
    try {
      await submitResponse({
        consultation_id: consultation.id,
        school_faculty: answers.school_faculty ?? "",
        year_of_study: answers.year_of_study ?? "",
        supports_current_formula: answers.supports_current_formula ?? "",
        preferred_payment_approach: answers.preferred_payment_approach ?? "",
        retakes_vs_supplementary: answers.retakes_vs_supplementary ?? "",
        recommendation: answers.recommendation ?? "",
        additional_comments: answers.additional_comments ?? "",
      });
      router.push("/consultation/success");
    } catch (e: any) {
      setSubmitting(false);
      console.error("SUBMIT ERROR →", e);
      alert(`Submission failed:\n\n${e?.message ?? e}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <ProgressIndicator current={stepIdx + 1} total={totalSteps} />

      <Card className="p-6 sm:p-8">
        {!isReview && (
          <>
            <h2 className="text-xl sm:text-2xl font-bold text-pusa-navy">
              {currentStep.title}
            </h2>
            {currentStep.description && (
              <p className="mt-2 text-sm text-pusa-gray">
                {currentStep.description}
              </p>
            )}

            <div className="mt-6 space-y-6">
              {currentStep.questions.map((q) => (
                <div key={q.id}>
                  {q.type === "select" && (
                    <SelectField
                      id={q.id}
                      label={q.label}
                      value={answers[q.id] ?? ""}
                      onChange={(v) => setAnswer(q.id, v)}
                      options={q.options ?? []}
                      required={q.required}
                      error={errors[q.id]}
                    />
                  )}

                  {q.type === "radio" && (
                    <fieldset>
                      <legend className="block text-sm font-semibold text-pusa-navy mb-3">
                        {q.label}
                        {q.required && (
                          <span className="text-pusa-orange"> *</span>
                        )}
                      </legend>
                      <div className="space-y-2.5">
                        {(q.options ?? []).map((o) => (
                          <RadioOption
                            key={o.value}
                            name={q.id}
                            value={o.value}
                            label={o.label}
                            checked={answers[q.id] === o.value}
                            onChange={(v) => setAnswer(q.id, v)}
                          />
                        ))}
                      </div>
                      {errors[q.id] && (
                        <p className="mt-1.5 text-sm text-red-600">
                          {errors[q.id]}
                        </p>
                      )}
                    </fieldset>
                  )}

                  {q.type === "textarea" && (
                    <TextAreaField
                      id={q.id}
                      label={q.label}
                      value={answers[q.id] ?? ""}
                      onChange={(v) => setAnswer(q.id, v)}
                      placeholder={q.placeholder}
                      required={q.required}
                      error={errors[q.id]}
                    />
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {isReview && (
          <ReviewStep consultation={consultation} answers={answers} />
        )}

        <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={goBack}
            disabled={stepIdx === 0}
            className={stepIdx === 0 ? "invisible" : ""}
          >
            <ArrowLeft size={16} /> Back
          </Button>

          {!isReview ? (
            <Button type="button" onClick={goNext}>
              Continue <ArrowRight size={16} />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={submit}
              disabled={submitting}
              className="min-w-[180px]"
            >
              {submitting ? "Submitting…" : (<><Send size={16} /> Submit My Response</>)}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

function ReviewStep({
  consultation,
  answers,
}: {
  consultation: Consultation;
  answers: Answers;
}) {
  const rows = useMemo(() => {
    const out: { label: string; value: string }[] = [];
    for (const step of consultation.steps) {
      for (const q of step.questions) {
        out.push({
          label: q.label,
          value: answers[q.id] || "—",
        });
      }
    }
    return out;
  }, [consultation, answers]);

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-bold text-pusa-navy">
        Review Your Response
      </h2>
      <p className="mt-2 text-sm text-pusa-gray">
        Please review your answers before submitting. You can still go back to
        change anything.
      </p>

      <dl className="mt-6 divide-y divide-pusa-border border-y border-pusa-border">
        {rows.map((r, i) => (
          <div key={i} className="py-4 grid sm:grid-cols-[220px_1fr] gap-1 sm:gap-4">
            <dt className="text-sm font-semibold text-pusa-navy">{r.label}</dt>
            <dd className="text-sm text-pusa-charcoal whitespace-pre-wrap break-words">
              {r.value}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}