import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import logo_s from "./Components/images/logo_s.png";
import Footer from "./Components/Footer.js";
import BookingPage from './Components/BookingForm.js';
import OrderOnline from './Components/OrderOnline.js';
import Login from './Components/Login.js';


function App() {

  return (
    <div className="App">
      <nav className="Header">
        <Link to="/"><img src={logo_s} alt=" "></img></Link>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="./Components/About.js" className="nav-item">About</Link>
        <Link to="./Components/BookingPage.js" className="nav-item">Reservations</Link>
        <Link to="./Components/OrderOnline.js" className="nav-item"> Order-Online</Link>
        <Link to="./Components/Login.js" className="nav-item">Login</Link>

      </nav>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Components/About.js" element={<About />}></Route>
        <Route path="/Components/BookingPage.js" element={<BookingPage />}></Route>
        <Route path="/Components/OrderOnline.js" element={<OrderOnline />}></Route>
        <Route path="/Components/Login.js" element={<Login />}></Route>
      </Routes>
      <footer ><Footer/></footer>
    </div>
  );
}

export default App;
