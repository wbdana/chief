import { EnthusiasmAction } from '../actions';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { IStoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export function enthusiasm(state: IStoreState, action: EnthusiasmAction): IStoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return {
                ...state,
                enthusiasmLevel: state.enthusiasmLevel + 1,
            };
        case DECREMENT_ENTHUSIASM:
            return {
                ...state,
                enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
            };
        default:
            return state;
    };

    return state;
}

const rootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    enthusiasm: enthusiasm,
});

export default rootReducer;
