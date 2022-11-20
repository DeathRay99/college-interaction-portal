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
      <div className="placement-stats">
        <div style={{borderLeft:"2px solid grey"}}>
          <span>Recruiters Visited</span> 
          <h1>
            {counterOn && (
              <CountUp start={0} end={160} duration={3} delay={1} />
            )}
          </h1>
        </div>
        <div style={{borderLeft:"2px solid grey"}}>
          <span>Students Placed</span>
          <h1>
            {counterOn && (
              <CountUp start={0} end={1000} duration={3} delay={1} />
            )}
            +
          </h1>
        </div>
        <div style={{borderLeft:"2px solid grey"}}>
          <span>Average CTC</span>
          <h1>
            {counterOn && <CountUp start={0} end={11} duration={3} delay={1} />}
            LPA
          </h1>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default PlacementOverview;
