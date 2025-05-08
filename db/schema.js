import { pgTable, text, timestamp, integer } from 'drizzle-orm/pg-core';
// import { sql } from 'drizzle-orm';
export const todosTable = pgTable("users", {
    id:integer().primaryKey().generatedAlwaysAsIdentity(),
    todo:text().notNull(),
    createdAt:timestamp('created_at').defaultNow(),
    // updatedAt:timestamp('updated_at').$onUpdated(() => sql`now()`)

  });