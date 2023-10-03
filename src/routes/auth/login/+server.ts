import { redirect } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async () => {
    throw redirect(307, `${env.GITHUB_TARGET}?client_id=${env.CLIENT_ID}&state=${env.SESSION_ID}`)
}