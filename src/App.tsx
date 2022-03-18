import React from "react";
import PlayerStatsDisplay from "./components/PlayerStatsDisplay";
import LocationButtonsLayout from "./components/LocationButtons";
import MarketPlace from "./components/MarketPlace";

const App: React.FC = () => (
  <div>
    <PlayerStatsDisplay />
    <LocationButtonsLayout />
    <MarketPlace />
  </div>
);

export default App;
