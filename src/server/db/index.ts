import { neon } from "@neondatabase/serverless";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import { drizzle as drizzlePostgres } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const globalForDb = global as unknown as {
  db:
    | ReturnType<typeof drizzleNeon>
    | ReturnType<typeof drizzlePostgres>
    | undefined;
};

function createDb() {
  const url = process.env.DATABASE_URL ?? "";
  const isNeon = url.includes("neon.tech");

  if (isNeon) {
    const sql = neon(url);
    return drizzleNeon({ client: sql, schema });
  }

  const client = postgres(url, { prepare: false });
  return drizzlePostgres({ client, schema });
}

export const db = globalForDb.db ?? createDb();

if (process.env.NODE_ENV !== "production") {
  globalForDb.db = db;
}
