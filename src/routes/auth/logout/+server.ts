import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async (event) => {
    event.cookies.delete('eygitsession', { path: '/' });
    
    return new Response('Redirect', {
        status: 302,
        headers: {
            Location: '/'
        }
    })
}