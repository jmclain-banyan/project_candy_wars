import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { LocationType } from "../../redux/reducers/locationReducer";
import { changeLocation } from "../../redux/actions/locationActions";

const LocationButtons: React.FC = () => {
  const locations: Array<LocationType> = useSelector(
    ({ location: { available } }: RootState) => available
  );

  const dispatch = useDispatch();

  const handleClick = (event: React.SyntheticEvent, location: LocationType) => {
    event.preventDefault();
    dispatch(changeLocation(location));
  };

  return (
    <div>
      {locations.map((location: LocationType, index: number) => (
        <button
          key={index}
          value={location.locationId}
          onClick={(event) => handleClick(event, location)}
        >
          {location.name}
        </button>
      ))}
    </div>
  );
};

export default LocationButtons;
