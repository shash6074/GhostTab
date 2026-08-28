'use client';
import { createClient } from '@supabase/supabase-js';
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Supabase now calls the browser-safe key a “publishable key”; retain support
// for the older anon-key variable to make existing projects work unchanged.
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = url && key ? createClient(url, key) : null;
export const hasSupabase = Boolean(supabase);
