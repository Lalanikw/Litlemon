import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import Specials from "./Components/Specials";
import About from "./Components/About";

function App() {
  return (
    <div className='Container'>
        <nav ><Header/></nav>
        <div><Main/></div>
        <div> <Specials/></div>
        <div><Testimonials/></div>
        <div><About/></div>
        <footer ><Footer/></footer>
    </div>
  );
}

export default App;
