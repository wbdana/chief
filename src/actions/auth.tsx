import * as authConstants from '../constants/auth';

export interface ISetUsername {
    type: authConstants.SET_USERNAME;
    payload: string;
}

export type AuthAction = ISetUsername;

export function setUsername(payload: string): ISetUsername {
    return {
        type: authConstants.SET_USERNAME,
        payload,
    };
}
