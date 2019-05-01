import { AuthAction } from '../actions/auth';
import { IAuthState } from '../types';
import {
    SET_USERNAME,
    SET_PROFILE_PICTURE_URL,
    SET_PROFILE_INFO,
} from '../constants/auth';

export function authReducer(state = {
    username: "",
    profilePictureUrl: "",
    reposUrl: "",
}, action: AuthAction): IAuthState {
    switch(action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case SET_PROFILE_PICTURE_URL:
            return {
                ...state,
                profilePictureUrl: action.payload,
            };
        case SET_PROFILE_INFO:
            return {
                ...state,
                username: action.payload.username,
                profilePictureUrl: action.payload.profilePictureUrl,
                reposUrl: action.payload.reposUrl,
            };
        default:
            return state;
    };
};

export default authReducer;
