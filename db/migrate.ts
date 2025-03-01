import { migrate } from 'drizzle-orm/neon-http/migrator';
import { db } from '.';

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migration success');
  } catch (error) {
    console.log(error);
  }
};

main();
