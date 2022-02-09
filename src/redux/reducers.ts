import { combineReducers, Reducer, CombinedState, AnyAction } from "redux";
import inventoryReducer from "./reducers/inventoryReducer";
import locationReducer from "./reducers/locationReducer";
import playerStatsReducer from "./reducers/playerStatsReducer";

export const rootReducer: Reducer<CombinedState<any>, AnyAction> = combineReducers({
    inventory: inventoryReducer,
    location: locationReducer,
    playerStats: playerStatsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
