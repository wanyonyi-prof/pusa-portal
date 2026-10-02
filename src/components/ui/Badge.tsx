import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "active",
}: {
  children: React.ReactNode;
  tone?: "active" | "upcoming" | "closed";
}) {
  const tones = {
    active: "bg-green-50 text-green-700 border-green-200",
    upcoming: "bg-amber-50 text-amber-700 border-amber-200",
    closed: "bg-gray-100 text-gray-600 border-gray-200",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border uppercase tracking-wide",
        tones[tone]
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}