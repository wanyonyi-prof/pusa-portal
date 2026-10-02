import "server-only";
import * as local from "./dataProvider.local";
import * as supa from "./dataProvider.supabase.server";

const source = process.env.NEXT_PUBLIC_DATA_SOURCE ?? "local";
const impl = source === "supabase" ? supa : local;

export const fetchSubmissions = impl.fetchSubmissions;
export const dataSource = source;