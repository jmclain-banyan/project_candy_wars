import React from "react";
import { useSelector } from "react-redux";
import { PlayerStatsState } from "../../redux/reducers/playerStatsReducer";
import { RootState } from "../../redux/store";
import { HudContainer } from "./style";

const PlayerStatsDisplay: React.FC = () => {
  const { cash, health, inventorySize, turnsLeft }: PlayerStatsState =
    useSelector(({ playerStats }: RootState) => playerStats);
  const currentLocationName: string = useSelector(
    ({ location: { current } }: RootState) => current.name
  );

  return (
    <HudContainer>
      <div>cash: {`$${cash}`}</div>
      <div>health: {`${health.current}/${health.max}`}</div>
      <div>turns left: {turnsLeft}</div>
      <div>inventory: {`${inventorySize.current}/${inventorySize.max}`}</div>
      <div>location: {currentLocationName}</div>
    </HudContainer>
  );
};

export default PlayerStatsDisplay;
