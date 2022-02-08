import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import { rootReducer } from './reducers';

const initialState = {};

const thunk: ThunkMiddleware = thunkMiddleware;

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(compose(applyMiddleware(thunk, createLogger()))),
);

export type RootState = ReturnType<typeof store.getState>;
export type DispatchAction = ReturnType<typeof store.dispatch>;

export default store;
