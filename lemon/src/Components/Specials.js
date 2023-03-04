import React, {Component} from "react";
import './Specials.css';
import greek_salad from "./images/greek_salad.jpg";
import Bruchetta from "./images/Bruchetta.png";
import lemon_cake from "./images/lemon_dessert.jpg";

class Specials extends Component {
  render() {
    return (
      <div className="Specials">
        <div className="Specials_title">
          <h3>This Weeks Specials!</h3>
          <button>Online Order</button>
        </div>
        <div className="S">
          <div className="greek" >
              <img src={greek_salad}  alt=""></img>
              <h4>Greek Salad  $12.99 </h4>
              <p>Lorem ipsum, or lipsum as it is sometimes
            known,Lorem ipsum, or lipsum as it is sometimes
            known, </p>
          </div>
          <div className="Bruchetta" >
              <img src={Bruchetta}  alt=""></img>
              <h4>Bruchetta  $6.99 </h4>
              <p>Lorem ipsum, or lipsum as it is sometimes
            known,Lorem ipsum, or lipsum as it is sometimes
            known, </p>
          </div>
          <div className="Lemon">
              <img src={lemon_cake} alt=""></img>
              <h4>Lemon Cake  $4.99 </h4>
              <p>Lorem ipsum, or lipsum as it is sometimes
            known,Lorem ipsum, or lipsum as it is sometimes
            known, </p>
          </div>
        </div>
      </div>
    );
  };
}

export default Specials;
