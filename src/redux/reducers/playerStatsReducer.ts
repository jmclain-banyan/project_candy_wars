import { Reducer, AnyAction } from "redux";

type HealthAndInventorySizeType = {
  current: number;
  max: number;
};

export type PlayerStatsState = {
  cash: number;
  turnsLeft: number;
  health: HealthAndInventorySizeType;
  inventorySize: HealthAndInventorySizeType;
};

const initialState: PlayerStatsState = {
  cash: 100,
  turnsLeft: 31,
  health: { current: 100, max: 100 },
  inventorySize: { current: 0, max: 25 },
};

const playerStatsReducer: Reducer = (
  state = initialState,
  { type, payload }: AnyAction
): PlayerStatsState => {
  switch (type) {
    default:
      return state;
  }
};

export default playerStatsReducer;
