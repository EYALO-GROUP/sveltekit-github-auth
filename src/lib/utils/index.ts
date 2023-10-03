const one_day = 60 * 60 * 24;

export const cookieOptions = {
	httpOnly: true,
	secure: false,
	sameSite: "strict",
} as const;