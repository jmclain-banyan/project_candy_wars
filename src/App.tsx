import React from "react";
import PlayerStatsDisplay from "./components/PlayerStatsDisplay";
import LocationButtons from "./components/LocationButtons";
import MarketPlace from "./components/MarketPlace";

const App: React.FC = () => (
  <div>
    <PlayerStatsDisplay />
    <LocationButtons />
    <MarketPlace />
  </div>
);

export default App;
