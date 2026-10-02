import { Submission, SubmissionPayload } from "./types";
import { supabasePublic } from "./supabase/client";

export async function submitResponse(
  payload: SubmissionPayload
): Promise<Submission> {
  const { error } = await supabasePublic
    .from("responses")
    .insert([payload]);

  if (error) {
    console.error("SUPABASE ERROR →", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
    throw new Error(error.message);
  }

  return {
    id: "(generated)",
    submitted_at: new Date().toISOString(),
    ...payload,
  } as Submission;
}