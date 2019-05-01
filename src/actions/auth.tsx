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

export interface ISetProfileInfo {
    type: authConstants.SET_PROFILE_INFO;
    payload: IProfileInfoPayload;
}

export type AuthAction = ISetUsername | ISetProfilePictureUrl | ISetProfileInfo;

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

export function setProfileInfo(profileInfoPayload: IProfileInfoPayload): ISetProfileInfo {
    return {
        type: authConstants.SET_PROFILE_INFO,
        payload: profileInfoPayload,
    }
}