import { drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";
import { z } from "zod";

const ENVSchema = z.object({
    DATABASE_URL: z.string().url(),
});

console.log(process.env.DATABASE_URL);

const processEnv = ENVSchema.parse(process.env);
const queryClient = postgres(processEnv.DATABASE_URL)
const db = drizzle(queryClient);

const result = await db.execute("select 1");

console.log(result);
