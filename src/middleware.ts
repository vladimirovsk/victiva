import { default as middleware } from 'next-auth/middleware';

export default middleware;

export const config = { matcher: [
	'/profile',
	'/admin'
] };
