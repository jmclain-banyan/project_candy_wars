import { combineReducers, Reducer, CombinedState, AnyAction } from "redux";
import inventoryReducer from "./reducers/inventoryReducer";
import locationReducer from "./reducers/locationReducer";

export const rootReducer: Reducer<CombinedState<any>, AnyAction> = combineReducers({
    inventory: inventoryReducer,
    location: locationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
