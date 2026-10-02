import { Submission } from "./types";

export interface CountRow {
  label: string;
  count: number;
  percent: number;
}

export function countBy(
  subs: Submission[],
  key: keyof Submission
): CountRow[] {
  const map = new Map<string, number>();
  for (const s of subs) {
    const v = String(s[key] ?? "").trim() || "—";
    map.set(v, (map.get(v) ?? 0) + 1);
  }
  const total = subs.length || 1;
  return [...map.entries()]
    .map(([label, count]) => ({
      label,
      count,
      percent: Math.round((count / total) * 1000) / 10,
    }))
    .sort((a, b) => b.count - a.count);
}

export function responsesToday(subs: Submission[]): number {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const t = start.getTime();
  return subs.filter((s) => new Date(s.submitted_at).getTime() >= t).length;
}

export function uniqueValues(
  subs: Submission[],
  key: keyof Submission
): number {
  return new Set(subs.map((s) => s[key]).filter(Boolean)).size;
}