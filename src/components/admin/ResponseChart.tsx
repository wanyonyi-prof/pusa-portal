import { CountRow } from "@/lib/analytics";

export function ResponseChart({
  title,
  rows,
  total,
}: {
  title: string;
  rows: CountRow[];
  total: number;
}) {
  return (
    <div className="bg-white rounded-card border border-pusa-border shadow-card p-5">
      <h3 className="font-bold text-pusa-navy">{title}</h3>
      <p className="text-xs text-pusa-gray mt-0.5">
        {total} {total === 1 ? "response" : "responses"}
      </p>

      {rows.length === 0 ? (
        <p className="mt-4 text-sm text-pusa-gray">No responses yet.</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {rows.map((r) => (
            <li key={r.label}>
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="font-medium text-pusa-charcoal pr-3 break-words">
                  {r.label}
                </span>
                <span className="text-pusa-gray whitespace-nowrap">
                  <strong className="text-pusa-navy">{r.count}</strong> ·{" "}
                  {r.percent}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-pusa-blueLight overflow-hidden">
                <div
                  className="h-full bg-pusa-orange"
                  style={{ width: `${Math.max(r.percent, 1)}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}