import { db } from '@/db';
import { user } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const getUserByEmail = async (email: string) => {
  try {
    const userData = await db.query.user.findFirst({
      columns: {
        email: true,
        password: true,
      },
      where: eq(user.email, email),
    });

    // return {
    //   id: userData?.id.toString(),
    //   ...userData,
    // };
    console.log(userData);
    return userData;
  } catch (error) {
    return null;
  }
};
