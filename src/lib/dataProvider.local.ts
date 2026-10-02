import { Filters, Submission, SubmissionPayload } from "./types";

const KEY = "pusa_submissions_v1";

function readAll(): Submission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Submission[]) : [];
  } catch {
    return [];
  }
}

function writeAll(items: Submission[]) {
  window.localStorage.setItem(KEY, JSON.stringify(items));
}

export async function submitResponse(payload: SubmissionPayload): Promise<Submission> {
  const item: Submission = {
    ...payload,
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2),
    submitted_at: new Date().toISOString(),
  };
  const all = readAll();
  all.unshift(item);
  writeAll(all);
  return item;
}

export async function fetchSubmissions(filters?: Filters): Promise<Submission[]> {
  let all = readAll();
  if (filters?.school) all = all.filter((s) => s.school_faculty === filters.school);
  if (filters?.year) all = all.filter((s) => s.year_of_study === filters.year);
  if (filters?.from) {
    const f = new Date(filters.from).getTime();
    all = all.filter((s) => new Date(s.submitted_at).getTime() >= f);
  }
  if (filters?.to) {
    const t = new Date(filters.to).getTime() + 86_400_000;
    all = all.filter((s) => new Date(s.submitted_at).getTime() <= t);
  }
  return all;
}