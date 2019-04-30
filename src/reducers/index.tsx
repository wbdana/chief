import { AuthAction } from '../actions';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { IStoreState } from '../types/index';
// import {
//     // INCREMENT_ENTHUSIASM,
//     // DECREMENT_ENTHUSIASM,
//     SET_USERNAME,
// } from '../constants/index';
import {
    SET_USERNAME,
} from '../constants/auth';

export function enthusiasm(state = {
    languageName: "TypeScript",
    enthusiasmLevel: 1,
    user: {
        username: "",
    },
}, action: AuthAction): IStoreState {
    switch (action.type) {
        // case INCREMENT_ENTHUSIASM:
        //     return {
        //         ...state,
        //         enthusiasmLevel: state.enthusiasmLevel + 1,
        //     };
        // case DECREMENT_ENTHUSIASM:
        //     return {
        //         ...state,
        //         enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
        //     };
        case SET_USERNAME:
            return {
                ...state,
                user: {
                    username: action.payload,
                }
            }
        default:
            return state;
    };
}

const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    enthusiasm: enthusiasm,
});

export default rootReducer;
