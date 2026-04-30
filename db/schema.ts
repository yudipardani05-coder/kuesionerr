import {
  mysqlTable,
  serial,
  varchar,
  int,
  timestamp,
  bigint,
} from "drizzle-orm/mysql-core";

export const respondents = mysqlTable("respondents", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  department: varchar("department", { length: 255 }).notNull(),
  yearsWorked: varchar("years_worked", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const answers = mysqlTable("answers", {
  id: serial("id").primaryKey(),
  respondentId: bigint("respondent_id", { mode: "number", unsigned: true }).notNull(),
  questionNumber: int("question_number").notNull(),
  answerValue: int("answer_value").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
