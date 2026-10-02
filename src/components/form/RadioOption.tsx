"use client";

export function RadioOption({
  name,
  value,
  label,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <label
      className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
        checked
          ? "border-pusa-orange bg-pusa-orange/5 ring-1 ring-pusa-orange"
          : "border-pusa-border bg-white hover:border-pusa-navy/40 hover:bg-pusa-blueLight"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
          checked ? "border-pusa-orange" : "border-pusa-gray/50"
        }`}
      >
        {checked && <span className="w-2.5 h-2.5 rounded-full bg-pusa-orange" />}
      </span>
      <span className="font-medium text-pusa-charcoal">{label}</span>
    </label>
  );
}