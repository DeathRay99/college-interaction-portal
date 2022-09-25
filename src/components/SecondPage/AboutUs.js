import React from "react";
import vision from "../assets/vision.png";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <h1>ABOUT US</h1>
      <br></br>
      <div className="AboutUs-parent">
          <img className="aboutusimg" src={vision} alt="" style={{}}/>
        <div className="AboutUs-c2" >
          Jaypee Institute of Information Technology, Noida was established in
          the year 2001 <br></br>and has been declared as a "Deemed to be
          University" under Section 3 of UGC Act 1956 in the year 2004. JIIT’s
          state-of-the-art, environmentally conditioned campus comprises smart
          buildings<br></br> with Wi-Fi connectivity covering the Academic
          Block, Business School cum Research Block, Faculty Residences, Student
          Hostels and Annapurna.<br></br> Well equipped modern laboratories and
          an intellectually stocked Learning Resource Centre with books and
          <br></br> E-Resources provide a pleasant and stimulating ambience.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
