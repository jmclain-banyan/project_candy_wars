import React from "react";
import PlayerStatsDisplay from "./components/PlayerStatsDisplay";
import LocationButtons from "./components/LocationButtons";

const App: React.FC = () => (
  <div>
    <PlayerStatsDisplay />
    <LocationButtons />
  </div>
);

export default App;
