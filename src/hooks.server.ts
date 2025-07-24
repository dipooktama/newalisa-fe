import { redirect, type Handle } from "@sveltejs/kit";
import { PUBLIC_AUTH_URL, PUBLIC_BACKEND_URL } from "$env/static/public";
import { dev } from "$app/environment";
import { env } from "$env/dynamic/public";

export const handle: Handle = async ({ event, resolve}) => {
    if(event.url.pathname === '/') {
        return resolve(event);
    }

    const authCookie = event.cookies.get('ssotok')
    const authHeader = event.request.headers.get('authorization');
    let token: string | undefined;

    if(dev) {
        token = env.PUBLIC_SSOTOK
    }
    if(authCookie) {
        token = authCookie;
    }
    if(authHeader?.startsWith('Bearer ')) {
        token = authHeader.substring(7);
    }

    if(token) {
        try {
            event.request.headers.set("Authorization", `Bearer ${token}`)
            const res = await event.fetch(`${PUBLIC_BACKEND_URL}/user/me`, {
                headers: {
					Authorization: `Bearer ${token}`
				}
            });
            
            if(res.ok) {
                const user = await res.json()
                // console.log(user)
                // event.locals.user = user;
                console.log("SOKSESS")
                return resolve(event)
            }
        } catch(e) {
            console.error('Validation error', e);
        }
    }

    const redirectUrl = new URL(`${PUBLIC_AUTH_URL}/auth/login/callback=&`);
    const callbackUrl = `${event.url.origin}/home`;
    const encodedCallback = btoa(callbackUrl);

    redirectUrl.searchParams.set('redir', encodedCallback);
    throw redirect(303, redirectUrl.toString());
};