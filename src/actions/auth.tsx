import * as authConstants from '../constants/auth';

export interface ISetUsername {
    type: authConstants.SET_USERNAME;
    payload: string;
}

export interface ISetProfilePictureUrl {
    type: authConstants.SET_PROFILE_PICTURE_URL;
    payload: string;
}

export type AuthAction = ISetUsername | ISetProfilePictureUrl;

export function setUsername(payload: string): ISetUsername {
    return {
        type: authConstants.SET_USERNAME,
        payload,
    };
}

export function setProfilePictureUrl(payload: string): ISetProfilePictureUrl {
    return {
        type: authConstants.SET_PROFILE_PICTURE_URL,
        payload,
    };
}
