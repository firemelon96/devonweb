import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  username: text('username'),
  email: text('email').unique(),
  password: text('password'),
});

export const userRelations = relations(user, ({ many }) => ({
  posts: many(posts),
}));

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  content: text('content'),
  authorId: integer('author_id'),
});

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(user, { fields: [posts.authorId], references: [user.id] }),
}));

export const userSchema = createInsertSchema(user);
