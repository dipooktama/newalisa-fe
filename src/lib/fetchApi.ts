import { env } from "$env/dynamic/public";

export default async function fetchApi(
    path = '/',
    method = 'GET',
    body = {},
    auth = ''
): Promise<any> {
    const ops: Record<string, any> = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        method,
    };

    ops.headers.Authorization = `Bearer ${auth}`;

    if((body && method === 'POST') || method === 'PATCH') {
        ops.body = JSON.stringify(body)
    }
    // console.log(`${env.PUBLIC_BACKEND_URL}${path}`);

    try {
        const res = await fetch(`${env.PUBLIC_BACKEND_URL}${path}`, ops);
        if(res.ok) {
            const data = await res.json();
            return data;
        } else {
            const data = await res.json();
            return data;
        }
    } catch (e: any) {
        // console.error(e);
        return e;
    }
}