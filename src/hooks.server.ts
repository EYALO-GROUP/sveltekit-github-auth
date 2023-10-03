import { getUser } from '$lib/server/server';
import type { Handle } from '@sveltejs/kit'
export const handle: Handle = async ({ event, resolve }) => {
  // get cookies from browser
  const session = event.cookies.get('eygitsession');
  
  if (!session) {
    // if there is no session load page as normal
    return await resolve(event)
  }

  event.locals.user = {
    login: session
  };

  return await resolve(event)
}
