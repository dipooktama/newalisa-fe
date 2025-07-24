import { error } from "@sveltejs/kit";
import { SsoResponseMaker } from "$lib/types/SsoResponse";
import { keysToCamel } from "$lib/camelcase";
import { env } from "$env/dynamic/public";
import { dev } from "$app/environment";
import fetchApi from "$lib/fetchApi.js";

export async function load({url, cookies, fetch}) {
    // const ssoRes = url.searchParams.get('ssoRes');
    // const errorCode = url.searchParams.get('errorCode');
    // const errorMessage = url.searchParams.get('errorMessage');
    // console.log("nih")
    
    // if(typeof ssoRes !== 'string') {
    //     return {
    //         ssoPayload: null,
    //         errorCode: errorCode ?? null,
    //         errorMessage: errorMessage ?? null,
    //     };
    // }
    // console.log("nih2")
    
    const responseSso = SsoResponseMaker.create(JSON.parse("{}"));
    // console.log(responseSso)
    // console.log("nih3")
    
    const ssotok = dev ? env.PUBLIC_SSOTOK : cookies.get('ssotok')
    // console.log(`dev? ${dev}`)
    // console.log(`ssotok? ${env.PUBLIC_SSOTOK}`)
    // console.log(`jwt? ${cookies.get('ssotok')}`)
    // console.log("nih4")
    
    const user = await fetchApi('/user/me', 'GET', {}, ssotok);
    // console.log(user)

    if(user.data) {
        responseSso.detail = keysToCamel(user.data);
    } else {
        return {
            ssoPayload: null,
            errorCode: user.status,
            errorMessage: user.message
        };
    }

    return {
		ssoPayload: responseSso,
		errorCode: null,
		errorMessage: null,
		currentDate: new Date().toLocaleString('id-ID') // Format: 'YYYY-MM-DD HH:mm:ss'
	};
}