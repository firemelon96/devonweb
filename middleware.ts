import { auth as middleware } from '@/auth';

export default middleware((req) => {
  const isloggedIn = !!req.auth;

  if (!isloggedIn && req.nextUrl.pathname === '/dashboard') {
    const newUrl = new URL('/login', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  if (isloggedIn && req.nextUrl.pathname === '/login') {
    const newUrl = new URL('/dashboard', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});
