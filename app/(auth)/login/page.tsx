import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

const LoginPage = () => {
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
          <form action='' className='space-y-2'>
            <Label>
              Username
              <Input type='text' />
            </Label>
            <Label>
              Password
              <Input type='password' />
            </Label>
            <Button type='submit' className='w-full'>
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
