import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReduxHistoryContext } from 'redux-first-history';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    //other options if needed
});

export const store = createStore(
    combineReducers({
        router: routerReducer,
    }),
    composeWithDevTools(applyMiddleware(routerMiddleware)),
);

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
