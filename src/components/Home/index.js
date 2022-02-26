import React from "react";
import TokenListSlider from "./TokenListSlider";
import LiveSell from "./LiveSell";
import Graph from "./Graph";

const Home = () => {
  return (
    <div className="LeftPanel">
      <TokenListSlider />
      <LiveSell />
      <Graph />
    </div>
  );
};

export default Home;
