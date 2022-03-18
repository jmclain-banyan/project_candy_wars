import React, { MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import LocationButton from "./LocationButton";
import { ButtonsContainer } from "./style";
import { RootState } from "../../redux/store";
import { LocationType } from "../../redux/reducers/locationReducer";
import { changeLocation } from "../../redux/actions/locationActions";

const LocationButtonsLayout: React.FC = () => {
  const locations: Array<LocationType> = useSelector(
    ({ location: { available } }: RootState) => available
  );

  const dispatch = useDispatch();

  const handleClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    location: LocationType
  ) => {
    event.preventDefault();
    dispatch(changeLocation(location));
  };

  return (
    <ButtonsContainer>
      {locations.map((location: LocationType, index: number) => (
        <LocationButton key={index} index={index} onClick={handleClick} location={location} />
      ))}
    </ButtonsContainer>
  );
};

export default LocationButtonsLayout;
