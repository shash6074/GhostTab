import { createClient } from '@supabase/supabase-js';
// Used by future server actions with a verified session; user data currently goes
// through the browser anon client, which preserves Supabase RLS enforcement.
export function createServerSupabaseClient() { const url=process.env.NEXT_PUBLIC_SUPABASE_URL; const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; return url&&key?createClient(url,key):null; }
