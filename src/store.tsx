import { createBrowserHistory } from 'history';
// import { applyMiddleware, compose, createStore } from 'redux';
import {
    applyMiddleware,
    createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';
// import { IStoreState } from './types';

export const history = createBrowserHistory();

export default function configureStore(preloadedState: {}) {
    const store = createStore(
        rootReducer(history),
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
            ),
        ),
    );

    return store;
};

