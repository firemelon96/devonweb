CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(256),
	"email" varchar(256),
	"password" varchar(256)
);
