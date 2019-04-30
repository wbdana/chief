import { AuthAction } from '../actions/auth';
import { IUserState } from '../types';
import {
    SET_USERNAME,
} from '../constants/auth';

export function authReducer(state = {
    username: "",
}, action: AuthAction): IUserState {
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