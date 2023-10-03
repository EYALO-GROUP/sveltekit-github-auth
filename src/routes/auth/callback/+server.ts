import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { getToken, getUser } from '$lib/server/server';
import { env } from '$env/dynamic/private';
import { cookieOptions } from '$lib/utils';

export const GET: RequestHandler = async (event) => {
    const url = new URLSearchParams();
    const code = event.url.searchParams.get('code');
    const sessionid = event.cookies.get('sessionid');
    if (!sessionid) {
        event.cookies.set('sessionid', env.SESSION_ID, cookieOptions);
    }
    const token = await getToken(code);
    
    const user = await getUser(token);
    
    return json({
        body: user
    });
}
