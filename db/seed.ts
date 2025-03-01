import { db } from './index';
import { user, posts } from './schema';
import bcrypt from 'bcryptjs';

const main = async () => {
  try {
    await db.delete(user);
    await db.delete(posts);

    const hashPassword = await bcrypt.hash('password', 10);

    await db.insert(user).values({
      id: 1,
      username: 'estonghero',
      email: 'estong.jamion@gmail.com',
      password: hashPassword,
    });

    await db.insert(posts).values({
      authorId: 1,
      content: 'This is a post',
      id: 1,
    });

    console.log('seed done');
  } catch (error) {
    console.log(error);
  }
};

main();
