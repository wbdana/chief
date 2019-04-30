import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducers
import authReducer from './auth';

const rootReducer = (history: any) => combineReducers({
    auth: authReducer,
    router: connectRouter(history),
});

export default rootReducer;
