"use client";

export function TextAreaField({
  id,
  label,
  value,
  onChange,
  placeholder,
  required,
  error,
  rows = 5,
  helper,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  rows?: number;
  helper?: string;
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
      {helper && <p className="mb-2 text-sm text-pusa-gray">{helper}</p>}
      <textarea
        id={id}
        rows={rows}
        value={value}
        required={required}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3.5 rounded-lg border bg-white text-pusa-charcoal focus:border-pusa-orange transition-colors resize-y ${
          error ? "border-red-400" : "border-pusa-border"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}