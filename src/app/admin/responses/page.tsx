import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { fetchSubmissions } from "@/lib/dataProvider.server";
import AdminSidebar from "@/components/admin/AdminSidebar";
import ResponsesTable from "@/components/admin/ResponsesTable";

export const metadata = { title: "Responses — PUSA Admin" };
export const dynamic = "force-dynamic";

export default async function AdminResponsesPage() {
  if (!(await isAdmin())) redirect("/admin/login");

  const subs = await fetchSubmissions();

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <AdminSidebar />
      <div className="flex-1 min-w-0">
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-pusa-navy">
            Student Responses
          </h1>
          <p className="mt-1 text-sm text-pusa-gray">
            {subs.length} {subs.length === 1 ? "response" : "responses"} recorded.
          </p>
        </header>
        <ResponsesTable submissions={subs} />
      </div>
    </div>
  );
}