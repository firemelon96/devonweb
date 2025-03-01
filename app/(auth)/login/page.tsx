'use client';

import { z } from 'zod';
import { login } from '@/actions/login';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { loginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    startTransition(() => {
      login(values);
    });
  };
  return (
    <div className='h-screen flex items-center justify-center'>
      <Card className='w-96 z-50'>
        <CardHeader>
          <CardTitle>
            <div className='flex gap-2 items-center'>
              <Image src='/logo.png' height={30} width={30} alt='logo' /> Login
            </div>
          </CardTitle>
          <CardDescription>Welcome back!</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Label>
                        Email
                        <Input {...field} disabled={isPending} />
                      </Label>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Label>
                        Password
                        <Input
                          {...field}
                          type='password'
                          disabled={isPending}
                        />
                      </Label>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='w-full' disabled={isPending}>
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
