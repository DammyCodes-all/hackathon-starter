# AGENTS.md

## Architecture Principles

### Rule 1: Everything is replaceable
AI provider, database driver, auth config, storage — all live in isolated files. Swapping any one never touches the rest.

### Rule 2: Single responsibility
One file = one concern. Auth config doesn't know about AI. DB client doesn't know about routes.

### Rule 3: Server-side stays server-side
`src/server/` imports never leak into client components. If you need data on the client, use Server Actions or API routes.

### Rule 4: No business logic in UI
Components render. Server actions and server modules do the work. Pages are thin wrappers.

### Rule 5: Reusable = component or utility
Shared code goes to `src/components/` or `src/lib/`. If it's used in 2+ places, extract it.

## Project Structure

```
src/
  app/            — Next.js App Router pages and routes
  components/     — Reusable UI components (shadcn + custom)
  hooks/          — Custom React hooks
  lib/            — Shared utilities (utils, env, auth-client)
  server/         — Server-only code (auth, db, ai, actions)
```

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Auth:** Better Auth
- **ORM:** Drizzle + Neon (Postgres)
- **AI:** Vercel AI SDK + Groq
- **UI:** shadcn/ui + Tailwind CSS v4
- **Toasts:** Sileo
- **Forms:** react-hook-form + Zod
- **State:** @tanstack/react-query (client), Server Components (server)
- **Linting:** Biome
- **Env:** @t3-oss/env-nextjs

## Development

```bash
pnpm dev          # Start dev server
pnpm lint         # Run Biome linter
pnpm typecheck    # Run TypeScript check
pnpm db:push      # Push schema to database
pnpm db:studio    # Open Drizzle Studio
```
