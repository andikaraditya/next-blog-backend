import { Pool } from "pg";

export default function getPool(connectionString: string) {
  return new Pool({
    connectionString: connectionString,
    max: 100,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 2000
  });
}
