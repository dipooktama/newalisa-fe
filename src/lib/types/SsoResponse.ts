import { keysToCamel } from "$lib/camelcase";

export default interface SsoResponse {
    userId: string;
    identity: string;
    name: string;
    email: string;
    emailUsu: string;
    unitId: string;
    userUnit: {
        altId: string;
        code: string;
        unitId: string;
        photo: string;
    };
    loggedInAs: string;
}

export class SsoResponseMaker {
  static create(event: Record<string, any>): SsoResponse {
    return keysToCamel  (event);
  }
}