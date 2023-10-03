import fetch from "node-fetch";
import { PUBLIC_GITHUB_ACCESS_TOKEN_TARGET } from "$env/static/public"
import { BASE_API_URL, CLIENT_ID, CLIENT_SECRET } from "$env/static/private";

export async function getToken(code: string | null) {
    const res = await fetch(PUBLIC_GITHUB_ACCESS_TOKEN_TARGET, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code
        })
    });

    const { access_token } = await res.json();
    return access_token;
}


export async function getUser(token: string | null) {
    const res = await fetch(`${BASE_API_URL}/user`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    return res.json();
}