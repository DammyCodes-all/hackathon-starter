# Hackathon Starter

Production-ready starter kit for hackathons. Clone, configure, and start building.

## Quick Start

```bash
# 1. Clone
git clone <repo-url>
cd hackathon-starter

# 2. Install
pnpm install

# 3. Configure
cp .env.example .env.local
# Fill in your environment variables

# 4. Setup database
pnpm db:push

# 5. Run
pnpm dev
```

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Auth | Better Auth |
| Database | Drizzle ORM + Neon (Postgres) |
| AI | Vercel AI SDK + Groq |
| UI | shadcn/ui + Tailwind CSS v4 |
| Toasts | Sileo |
| Forms | react-hook-form + Zod |
| Linting | Biome |

## Environment Variables

See `.env.example` for all required variables:

- `DATABASE_URL` — Neon Postgres connection string
- `BETTER_AUTH_SECRET` — Secret key (min 32 chars)
- `BETTER_AUTH_URL` — App base URL
- `GROQ_API_KEY` — Groq API key
- `NEXT_PUBLIC_APP_URL` — Public app URL

## Scripts

```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm lint         # Biome linting
pnpm typecheck    # TypeScript check
pnpm db:push      # Push schema to DB
pnpm db:generate  # Generate migrations
pnpm db:studio    # Drizzle Studio
```

## Project Structure

```
src/
  app/              Pages and API routes
  components/       Reusable UI components
  lib/              Shared utilities
  server/           Server-only code
    auth.ts         Better Auth config
    db/             Database client and schema
    ai/             AI provider abstraction
```

## License

MIT
