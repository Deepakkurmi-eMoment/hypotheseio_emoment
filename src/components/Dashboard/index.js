import React from "react";
import TokenListSlider from "./TokenListSlider";
import LiveSell from "./LiveSell";
import Graph from "./Graph";

const Dashboard = () => {
  return (
    <div className="LeftPanel">
      <TokenListSlider />
      <LiveSell />
      <Graph />
    </div>
  );
};

export default Dashboard;
