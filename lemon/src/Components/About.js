import React from "react";
import "./About.css";
import chef from "./images/chef.png"

function About () {
  return (
    <div className="About">
      <div className="AA">
        <h3>Little Lemon</h3>
        <h4>Chicago</h4>
        <p>Lorem ipsum, or lipsum as it is sometimes.
          known, is dummy text used in laying out print,
          graphic or web design.</p>
      </div>
      <div className="Ab">
        <img src={chef} alt=""></img>
      </div>
    </div>
  );
}
export default About;