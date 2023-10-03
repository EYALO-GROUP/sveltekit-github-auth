import { error } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { getToken, getUser} from '$lib/server/server';
import { SESSION_ID } from '$env/static/private';
import { cookieOptions } from '$lib/utils';

export const GET: RequestHandler = async ({ url, cookies }) => {
    const code = url.searchParams.get('code');
    
    const token = await getToken(code);
    if (!token) {
        throw error(404, {
            message: 'Token invalid'
        });
    }
    const user = await getUser(token);

    if (!user) {
        throw error(404, {
            message: 'Not found'
        });
    }
    cookies.set('eygitsession', user?.login, cookieOptions)
    
    return new Response('Redirect', {
        status: 302,
        headers: {
            Location: '/',
        }
    })
}
