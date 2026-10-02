"use client";

import { SCHOOLS, YEARS } from "@/config/consultations";
import { Filter, X } from "lucide-react";

export interface FilterState {
  school: string;
  year: string;
  from: string;
  to: string;
}

export const emptyFilters: FilterState = {
  school: "",
  year: "",
  from: "",
  to: "",
};

export default function FilterBar({
  filters,
  onChange,
  onApply,
  onClear,
  resultCount,
}: {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  onApply: () => void;
  onClear: () => void;
  resultCount: number;
}) {
  const hasActive =
    !!filters.school || !!filters.year || !!filters.from || !!filters.to;

  return (
    <div className="bg-white rounded-card border border-pusa-border shadow-card p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-pusa-navy mb-3">
        <Filter size={16} /> Filters
        <span className="ml-auto text-xs font-normal text-pusa-gray">
          {resultCount} {resultCount === 1 ? "result" : "results"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div>
          <label className="block text-xs font-semibold text-pusa-gray mb-1">
            School / Faculty
          </label>
          <select
            value={filters.school}
            onChange={(e) => onChange({ ...filters, school: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-pusa-border text-sm bg-white focus:border-pusa-orange"
          >
            <option value="">All schools</option>
            {SCHOOLS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-pusa-gray mb-1">
            Year of Study
          </label>
          <select
            value={filters.year}
            onChange={(e) => onChange({ ...filters, year: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-pusa-border text-sm bg-white focus:border-pusa-orange"
          >
            <option value="">All years</option>
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-pusa-gray mb-1">
            From Date
          </label>
          <input
            type="date"
            value={filters.from}
            onChange={(e) => onChange({ ...filters, from: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-pusa-border text-sm bg-white focus:border-pusa-orange"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-pusa-gray mb-1">
            To Date
          </label>
          <input
            type="date"
            value={filters.to}
            onChange={(e) => onChange({ ...filters, to: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-pusa-border text-sm bg-white focus:border-pusa-orange"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:justify-end">
        <button
          onClick={onClear}
          disabled={!hasActive}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-pusa-border text-sm font-semibold text-pusa-charcoal hover:bg-pusa-blueLight disabled:opacity-50"
        >
          <X size={14} /> Clear Filters
        </button>
        <button
          onClick={onApply}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-pusa-navy text-white text-sm font-semibold hover:bg-pusa-blue"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}