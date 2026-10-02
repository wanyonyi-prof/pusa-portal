import { Filters, Submission } from "./types";
import { supabaseAdmin } from "./supabase/server";

export async function fetchSubmissions(
  filters?: Filters
): Promise<Submission[]> {
  let q = supabaseAdmin()
    .from("responses")
    .select("*")
    .order("submitted_at", { ascending: false });

  if (filters?.school) q = q.eq("school_faculty", filters.school);
  if (filters?.year) q = q.eq("year_of_study", filters.year);
  if (filters?.from) q = q.gte("submitted_at", filters.from);
  if (filters?.to) q = q.lte("submitted_at", filters.to + "T23:59:59.999Z");

  const { data, error } = await q;
  if (error) throw new Error(error.message);
  return (data ?? []) as Submission[];
}