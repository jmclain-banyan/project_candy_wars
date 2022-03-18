import React, { MouseEvent } from "react";
import { Button } from "./style";
import { LocationType } from "../../redux/reducers/locationReducer";

type ButtonPropTypes = {
  onClick: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    location: LocationType
  ) => void;
  location: LocationType;
  index: number;
};

const LocationButton: React.FC<ButtonPropTypes> = ({
  onClick,
  location,
  index,
}) => (
  <Button
    index={index}
    value={location.locationId}
    onClick={(event) => onClick(event, location)}
  >
    {location.name}
  </Button>
);

export default LocationButton;
