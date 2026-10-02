"use client";

import { useMemo, useState } from "react";
import { Submission } from "@/lib/types";
import { Download, Search, ChevronDown, ChevronRight } from "lucide-react";
import FilterBar, { FilterState, emptyFilters } from "./FilterBar";

function toCSV(rows: Submission[]): string {
  if (rows.length === 0) return "";
  const cols: (keyof Submission)[] = [
    "id",
    "submitted_at",
    "school_faculty",
    "year_of_study",
    "supports_current_formula",
    "preferred_payment_approach",
    "retakes_vs_supplementary",
    "recommendation",
    "additional_comments",
    "consultation_id",
  ];
  const escape = (v: any) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [
    cols.join(","),
    ...rows.map((r) => cols.map((c) => escape(r[c])).join(",")),
  ].join("\n");
}

export default function ResponsesTable({
  submissions,
}: {
  submissions: Submission[];
}) {
  const [q, setQ] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  // Filter state: "draft" is edited by user, "applied" is what filters the table
  const [draft, setDraft] = useState<FilterState>(emptyFilters);
  const [applied, setApplied] = useState<FilterState>(emptyFilters);

  const filtered = useMemo(() => {
    return submissions.filter((s) => {
      if (applied.school && s.school_faculty !== applied.school) return false;
      if (applied.year && s.year_of_study !== applied.year) return false;
      const t = new Date(s.submitted_at).getTime();
      if (applied.from) {
        const f = new Date(applied.from).getTime();
        if (t < f) return false;
      }
      if (applied.to) {
        const to = new Date(applied.to).getTime() + 86_400_000; // inclusive
        if (t > to) return false;
      }
      if (q.trim()) {
        const needle = q.toLowerCase();
        const hay = [
          s.school_faculty,
          s.year_of_study,
          s.supports_current_formula,
          s.preferred_payment_approach,
          s.retakes_vs_supplementary,
          s.recommendation,
          s.additional_comments,
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [submissions, applied, q]);

  function downloadCSV() {
    const csv = toCSV(filtered);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pusa-responses-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-4">
      <FilterBar
        filters={draft}
        onChange={setDraft}
        onApply={() => setApplied(draft)}
        onClear={() => {
          setDraft(emptyFilters);
          setApplied(emptyFilters);
        }}
        resultCount={filtered.length}
      />

      <div className="bg-white rounded-card border border-pusa-border shadow-card overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-pusa-border flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-pusa-gray"
            />
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search responses…"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-pusa-border text-sm focus:border-pusa-orange"
            />
          </div>
          <button
            onClick={downloadCSV}
            disabled={filtered.length === 0}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-pusa-navy text-white text-sm font-semibold hover:bg-pusa-blue disabled:opacity-50"
          >
            <Download size={16} /> Export Responses
          </button>
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <div className="p-10 text-center text-pusa-gray text-sm">
            No responses to display.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-pusa-blueLight text-pusa-navy">
                <tr>
                  <th className="w-8"></th>
                  <th className="text-left px-3 py-3 font-semibold whitespace-nowrap">
                    Date
                  </th>
                  <th className="text-left px-3 py-3 font-semibold">
                    School / Faculty
                  </th>
                  <th className="text-left px-3 py-3 font-semibold whitespace-nowrap">
                    Year
                  </th>
                  <th className="text-left px-3 py-3 font-semibold whitespace-nowrap">
                    Current Formula
                  </th>
                  <th className="text-left px-3 py-3 font-semibold whitespace-nowrap">
                    Preferred Approach
                  </th>
                  <th className="text-left px-3 py-3 font-semibold whitespace-nowrap">
                    Retakes / Supp.
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pusa-border">
                {filtered.map((r) => {
                  const isOpen = expanded === r.id;
                  return (
                    <>
                      <tr
                        key={r.id}
                        className="hover:bg-pusa-blueLight/40 cursor-pointer"
                        onClick={() => setExpanded(isOpen ? null : r.id)}
                      >
                        <td className="px-2 py-3 text-pusa-gray">
                          {isOpen ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-pusa-gray">
                          {new Date(r.submitted_at).toLocaleString()}
                        </td>
                        <td className="px-3 py-3">{r.school_faculty}</td>
                        <td className="px-3 py-3 whitespace-nowrap">
                          {r.year_of_study}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap">
                          {r.supports_current_formula}
                        </td>
                        <td className="px-3 py-3">
                          {r.preferred_payment_approach}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap">
                          {r.retakes_vs_supplementary}
                        </td>
                      </tr>
                      {isOpen && (
                        <tr className="bg-pusa-blueLight/40">
                          <td></td>
                          <td colSpan={6} className="px-3 py-4 space-y-3">
                            <div>
                              <div className="text-xs font-bold uppercase tracking-wide text-pusa-gray">
                                Recommendation
                              </div>
                              <p className="mt-1 text-pusa-charcoal whitespace-pre-wrap">
                                {r.recommendation || "—"}
                              </p>
                            </div>
                            <div>
                              <div className="text-xs font-bold uppercase tracking-wide text-pusa-gray">
                                Additional Comments
                              </div>
                              <p className="mt-1 text-pusa-charcoal whitespace-pre-wrap">
                                {r.additional_comments || "—"}
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}