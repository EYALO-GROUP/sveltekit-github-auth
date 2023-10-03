const one_day = 60 * 60 * 24;

export const cookieOptions = {
	path: '/',
	httpOnly: true,
	sameSite: 'strict',
	secure: process.env.NODE_ENV === 'production',
	maxAge: 60 * 60 * 24,
  } as const;