import { combineReducers, Reducer, CombinedState, AnyAction } from "redux";
import inventoryReducer from "./reducers/inventoryReducer";

export const rootReducer: Reducer<CombinedState<any>, AnyAction> = combineReducers({
    inventory: inventoryReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
