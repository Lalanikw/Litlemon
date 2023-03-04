import React from "react";
import './Testimonials.css';
import G1 from './images/G1.JPG'
import G2 from './images/G2.JPG'
import G3 from './images/G3.JPG'
import G4 from './images/G4.JPG'


function Testimonials() {
    return (
     <>
        <div className="Testimonials">
          <h4>Testimonials</h4>
        </div>
        <div className="T">
          <div className="G1" >
            <h4>Name</h4>
            <img src={G1}  alt=""></img>
            <p>Details: Lorem ipsum, or lipsum as it is sometimes
            known,Lorem ipsum as it is sometimes
            known, </p>
          </div>
          <div className="G2" >
            <h4>Name</h4>
            <img src={G2}  alt=""></img>
            <p>Details: Lorem ipsum, or lipsum as it is sometimes
            known,Lorem ipsum as it is sometimes
            known, </p>
          </div>
          <div className="G3" >
            <h4>Name</h4>
            <img src={G3}  alt=""></img>
            <p>Details: Lorem ipsum, or lipsum as it is sometimes
            known,Lorem ipsum as it is sometimes
            known, </p>
          </div>
          <div className="G4" >
            <h4>Name</h4>
            <img src={G4}  alt=""></img>
            <p>Details: Lorem ipsum, or lipsum as it is sometimes
            known,Lorem ipsum as it is sometimes
            known, </p>
          </div>
        </div>
    </>
    );
  };
  export default Testimonials;
