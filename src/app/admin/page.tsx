import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { fetchSubmissions } from "@/lib/dataProvider.server";
import { countBy, responsesToday, uniqueValues } from "@/lib/analytics";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { ResponseChart } from "@/components/admin/ResponseChart";

export const metadata = { title: "Admin — PUSA Portal" };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdmin())) redirect("/admin/login");

  const subs = await fetchSubmissions();
  const total = subs.length;

  const stats = [
    { label: "Total Responses", value: total },
    { label: "Responses Today", value: responsesToday(subs) },
    { label: "Schools Represented", value: uniqueValues(subs, "school_faculty") },
    { label: "Year Groups Represented", value: uniqueValues(subs, "year_of_study") },
  ];

  const charts = [
    {
      title: "Support for Current Formula",
      rows: countBy(subs, "supports_current_formula"),
    },
    {
      title: "Preferred Payment Approach",
      rows: countBy(subs, "preferred_payment_approach"),
    },
    {
      title: "Retakes vs Supplementary",
      rows: countBy(subs, "retakes_vs_supplementary"),
    },
    {
      title: "School / Faculty",
      rows: countBy(subs, "school_faculty"),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <AdminSidebar />

      <div className="flex-1 min-w-0">
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-pusa-navy">
            Consultation Overview
          </h1>
          <p className="mt-1 text-sm text-pusa-gray">
            Aggregated analytics for the current PUSA public participation
            exercise.
          </p>
        </header>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-card border border-pusa-border shadow-card p-5"
            >
              <div className="text-xs uppercase tracking-wide text-pusa-gray font-semibold">
                {s.label}
              </div>
              <div className="mt-2 text-3xl font-extrabold text-pusa-navy">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {charts.map((c) => (
            <ResponseChart
              key={c.title}
              title={c.title}
              rows={c.rows}
              total={total}
            />
          ))}
        </div>

        {total === 0 && (
          <div className="mt-8 p-6 rounded-card border border-dashed border-pusa-border bg-white text-center">
            <p className="text-pusa-gray text-sm">
              No responses yet. Submissions will appear here once students
              start participating.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}