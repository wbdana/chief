import * as authConstants from '../constants/auth';

export interface ISetUsername {
    type: authConstants.SET_USERNAME;
    payload: string;
}

export interface ISetProfilePictureUrl {
    type: authConstants.SET_PROFILE_PICTURE_URL;
    payload: string;
}

export interface IProfileInfoPayload {
    username: string;
    profilePictureUrl: string;
    reposUrl: string;
}

export interface ISetAccessToken {
    type: authConstants.SET_ACCESS_TOKEN;
    payload: string;
}

export interface ISetProfileInfo {
    type: authConstants.SET_PROFILE_INFO;
    payload: IProfileInfoPayload;
}

export type AuthAction = ISetUsername | ISetProfilePictureUrl | ISetProfileInfo | ISetAccessToken;

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

export function setAccessToken(accessToken: string): ISetAccessToken {
    return {
        type: authConstants.SET_ACCESS_TOKEN,
        payload: accessToken,
    };
}

export function setProfileInfo(profileInfoPayload: IProfileInfoPayload): ISetProfileInfo {
    return {
        type: authConstants.SET_PROFILE_INFO,
        payload: profileInfoPayload,
    };
}

export function login(accessToken: string) {
    return (dispatch: any) => {
        dispatch(setAccessToken);
        dispatch()
    }
}