import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const globalForDb = global as unknown as {
  db: ReturnType<typeof drizzle> | undefined;
};

export const db =
  globalForDb.db ??
  drizzle({
    client: neon(process.env.DATABASE_URL!),
    schema,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.db = db;
}
