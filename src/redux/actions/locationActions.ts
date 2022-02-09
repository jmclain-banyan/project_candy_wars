import { Dispatch } from "redux";
import { LocationType } from "../reducers/locationReducer";
import { generateMarket } from "../../utils/generateMarket";

export const CHANGE_LOCATION: string = "CHANGE_LOCATION";

export const changeLocation =
  (newLocation: LocationType) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: CHANGE_LOCATION,
      payload: { ...newLocation, availableProduct: [...generateMarket()] },
    });
  };
