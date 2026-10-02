"use client";

interface Option {
  value: string;
  label: string;
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option…",
  required,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-pusa-navy mb-2"
      >
        {label}
        {required && <span className="text-pusa-orange"> *</span>}
      </label>
      <select
        id={id}
        value={value}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3.5 rounded-lg border bg-white text-pusa-charcoal focus:border-pusa-orange transition-colors ${
          error ? "border-red-400" : "border-pusa-border"
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}