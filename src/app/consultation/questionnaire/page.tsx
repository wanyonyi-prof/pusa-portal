import QuestionnaireForm from "@/components/QuestionnaireForm";
import { getActiveConsultation } from "@/config/consultations";

export const metadata = { title: "Questionnaire — PUSA Portal" };

export default function QuestionnairePage() {
  const c = getActiveConsultation();
  return (
    <div className="px-4 sm:px-6 py-10 md:py-14 bg-pusa-blueLight min-h-[70vh]">
      <div className="max-w-2xl mx-auto mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-pusa-navy">
          {c.shortTitle}
        </h1>
        <p className="mt-1 text-sm text-pusa-gray">
          Please answer each question honestly. Your response is anonymous.
        </p>
      </div>
      <QuestionnaireForm consultation={c} />
    </div>
  );
}