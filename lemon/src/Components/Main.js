import React, {Component} from "react";
import './Main.css';
import main from './images/main.jpg'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Main_left">
          <h3>Little Lemon</h3>
          <h4>Chicago</h4>
          <p>Lorem ipsum, or lipsum as it is sometimes
            known, is dummy text used in laying out print, graphic or web design.</p>
          <button>Reserve a Table</button>
        </div>
        <div className="Main_right">
            <img src={main} className="main_image" alt=""></img>
        </div>
      </div>
    );
  }
}

export default Main;