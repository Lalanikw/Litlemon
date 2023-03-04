import logo_s from "./images/logo_s.png"
import './Header.css';

function Header () {
  return (
      <nav className="Header">
        <img href="/Home"src={logo_s} alt=""></img>
        <ul className="Nav_bar_content">
            <li className="Nav"><a href="/Home">Home</a></li>
            <li className="Nav"><a href="/Reservations"> Reservations</a></li>
            <li className="Nav"><a href="/Order Online"> Order Online</a></li>
            <li className="Nav-sec"><a href="/About"> About</a></li>
            <li className="Nav-sec"><a href="/Login"> Login</a></li>
        </ul>
        <div className="Ham" href="/Home">&#9776;</div>
      </nav>
  );
}
export default Header;
