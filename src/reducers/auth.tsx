import { AuthAction } from '../actions/auth';
import { IAuthState } from '../types';
import {
    SET_USERNAME,
    SET_PROFILE_PICTURE_URL,
} from '../constants/auth';

export function authReducer(state = {
    username: "",
    profilePictureUrl: "",
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
        default:
            return state;
    };
};

export default authReducer;
