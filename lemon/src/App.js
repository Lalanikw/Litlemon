import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Testimonials from "./Components/Testimonials";
import Specials from "./Components/Specials";
import About from "./Components/About";

function App() {
  return (
    <>
      <main>
        <ul>
          <Header/>
          <Main/>
          <Specials/>
          <Testimonials/>
          <About/>
          <Footer/>
        </ul>
      </main>
    </>
  );
}

export default App;
