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
    detail: {
      user_id: string,
      name: string,
      email: string,
      email_usu: string,
      identity: string,
      source: string,
      photo: string,
      user_type: string,
      role: string,
      role_active: string,
      role_list: [
        string
      ],
      unit_list: [
        {
          id: string,
          unit: string
        }
      ],
      created_at: string | null,
      updated_at: string | null,
      deleted_at: string | null,
    }
}

export class SsoResponseMaker {
  static create(event: Record<string, any>): SsoResponse {
    return keysToCamel  (event);
  }
}