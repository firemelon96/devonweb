'use server';
import { loginSchema } from '@/schemas';
import * as z from 'zod';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { userSchema } from '@/db/schema';

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = userSchema.safeParse(values);

  if (validatedFields.success) {
    const { email, password } = validatedFields.data;

    try {
      await signIn('credentials', {
        email,
        password,
        redirectTo: '/dashboard',
      });

      console.log('Login success');
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return { error: 'Invalid credentionls' };
          case 'CallbackRouteError':
            return { error: `${error.cause?.err}` };
          default:
            return { error: 'Something went wrong' };
        }
      }

      throw error;
    }
  }
};
