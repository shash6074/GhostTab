# GhostTab

GhostTab is a private, context-first bookmark manager: save a useful website, write why it mattered, and rediscover it later.

## Run it

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
2. Run `supabase/migrations/20260828000000_ghosttab.sql` in the Supabase SQL Editor or with the Supabase CLI.
3. Enable Email/Password authentication. Configure Google under Authentication → Providers if you need OAuth.
4. Run `pnpm install` then `pnpm dev`.

Without environment values, the app runs in clearly labelled demo mode with local sample data. It never sends demo data to a database.

## Security

The migration enables RLS on every application table. Every policy scopes reads and mutations to `auth.uid()`, including join-table, reminder, and activity access. The browser only uses Supabase’s anon key; no service-role secret is included.
