import { AuthAction } from '../actions/auth';
import { IAuthState } from '../types';
import {
    SET_USERNAME,
} from '../constants/auth';

export function authReducer(state = {
    username: "",
}, action: AuthAction): IAuthState {
    switch(action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        default:
            return state;
    };
};

export default authReducer;
