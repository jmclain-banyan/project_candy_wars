import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { LocationType } from "../../redux/reducers/locationReducer";

const LocationButtons: React.FC = () => {
  const locations: Array<LocationType> = useSelector(
    ({ location: { available } }: RootState) => available
  );

  return (
    <div>
      {locations.map((location: LocationType, index: number) => (
        <button key={index} value={location.locationId}>
          {location.name}
        </button>
      ))}
    </div>
  );
};

export default LocationButtons;
