import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function PlacementOverview() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div>
        PlacementOverview Recruiters Visited
        <h1>
          {counterOn && <CountUp start={0} end={160} duration={3} delay={1} />}
        </h1>
        Students Placed
        <h1>
          {counterOn && <CountUp start={0} end={1000} duration={3} delay={1} />}
          +
        </h1>
        Average CTC
        <h1>
          {counterOn && <CountUp start={0} end={11} duration={3} delay={1} />}
          LPA
        </h1>
      </div>
    </ScrollTrigger>
  );
}

export default PlacementOverview;
