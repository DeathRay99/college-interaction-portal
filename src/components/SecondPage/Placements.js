import React from "react";
import "./Placements.css";
import PlacementOverview from "./PlacementOverview";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
function Placements() {
  return (
    <div>
      <h1>PLACEMENTS</h1>
      <br></br>
      <br></br>
      <div className="Placements-parent">
        <div className="Placements-c1">
          <PlacementOverview />
        </div>
        <div className="Placements-c2" >
          <div className="col1">
          <img className="companies" src={c1} alt="" />
          <img className="companies" src={c2} alt="" />
          </div>
          <div className="col2">
          <img className="companies" src={c3} alt="" />
          <img className="companies" src={c4} alt="" />
          </div>
          <div className="col3">
          <img className="companies" src={c5} alt="" />
          <img className="companies" src={c6} alt="" />
          </div>
          <div className="col4">
          <img className="companies" src={c7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placements;
