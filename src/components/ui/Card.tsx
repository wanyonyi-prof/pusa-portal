import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-white rounded-card border border-pusa-border shadow-card",
        className
      )}
    >
      {children}
    </div>
  );
}