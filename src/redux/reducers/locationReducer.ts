import { Reducer, AnyAction } from "redux";
import { ProductType } from "../../utils/generateMarket";
import { CHANGE_LOCATION } from "../actions/locationActions";

export type LocationType = {
  name: string;
  locationId: string;
  availableProduct?: Array<ProductType>;
};

type LocationState = {
  current: LocationType;
  available: Array<LocationType>;
};

const initialState: LocationState = {
  current: {
    name: "Home",
    locationId: "home",
  },
  available: [
    {
      name: "Candy Land",
      locationId: "candyLand",
    },
    {
      name: "Hershey Park",
      locationId: "hersheyPark",
    },
    {
      name: "Land of Oz",
      locationId: "landOfOz",
    },
    {
      name: "Willy Wonka's Factory",
      locationId: "wonkaFactory",
    },
    {
      name: "Knott's Berry Farm",
      locationId: "knottsFarm",
    },
  ],
};

const locationReducer: Reducer = (
  state = initialState,
  { type, payload }: AnyAction
): LocationState => {
  switch (type) {
    case CHANGE_LOCATION:
      return {
        ...state,
        current: payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
