export function ProgressIndicator({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between text-sm font-semibold text-pusa-navy mb-2">
        <span>
          Step {current} of {total}
        </span>
        <span className="text-pusa-gray">{pct}%</span>
      </div>
      <div
        className="h-2 bg-pusa-blueLight rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        <div
          className="h-full bg-pusa-orange transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}