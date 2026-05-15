```ts
import { getToken } from 'next-auth/jwt';

export async function getAuthToken(req) {
  const secret = process.env.NEXTAUTH_SECRET;
  // Get the token securely from the request
  const token = await getToken({ req, secret });

  if (!token) {
    throw new Error('Unauthorized');
  }

  return token;
}
```