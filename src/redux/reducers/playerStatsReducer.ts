import { Reducer, AnyAction } from "redux";

type HealthAndInventorySizeType = {
  current: number;
  max: number;
};

type PlayerStatsState = {
  cash: number;
  turnsLeft: number;
  health: HealthAndInventorySizeType;
  inventorySize: HealthAndInventorySizeType;
};

const initialState: PlayerStatsState = {
  cash: 100,
  turnsLeft: 31,
  health: { current: 100, max: 0 },
  inventorySize: { current: 100, max: 0 },
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
