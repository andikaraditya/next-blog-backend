import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 100,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 2000
});
