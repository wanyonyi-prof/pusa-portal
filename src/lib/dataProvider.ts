import * as local from "./dataProvider.local";
import * as supa from "./dataProvider.supabase.client";

const source = process.env.NEXT_PUBLIC_DATA_SOURCE ?? "local";
const impl = source === "supabase" ? supa : local;

export const submitResponse = impl.submitResponse;
export const dataSource = source;