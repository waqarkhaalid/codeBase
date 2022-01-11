import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string =
  process.env.REACT_APP_SUPABASE_URL ?? "supabase_url";
const supabaseAnonKey: string =
  process.env.REACT_APP_SUPABASE_ANON_KEY ?? "supabase_anon";

export const SUPABASE_CONFIG = createClient(supabaseUrl, supabaseAnonKey);
