import React from "react";
import Background from "./background";
import Counter from "./counter";

const Carousel = () => {
  return (
    <div style={{ position: "relative" }}>
      <Background />
      <div className="event_name">
        <div className="wrapper">Comicon India</div>
      </div>
      <Counter />
    </div>
  );
};

export default Carousel;
