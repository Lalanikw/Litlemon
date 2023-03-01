import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import Specials from "./Components/Specials";
import About from "./Components/About";
import Home from "./Components/Header";

function App() {
  return (
    <div class="container">
        <nav class="Header">
            <Header >
                <ul class="Nav_bar_content">
                    <li><a href={Home}> Home</a></li>
                    <li><a href={About}> About</a></li>
                    <li><a href={Specials}> Menu</a></li>
                    <li><a href={Main}> Reservations</a></li>
                    <li><a href={Specials}> Order Online</a></li>
                    <li><a href="/Login"> Login</a></li>
                </ul>
            </Header>
        </nav>
        <main class="Main">
            <div class="Main_section">
                <ul>
                    <li class="Hero"><Main />Main</li>
                    <li class="Specials"><Specials/>Specials</li>
                    <li class="Testimonials"><Testimonials />Testimonials</li>
                    <li class="About"><About />About</li>
                </ul>
            </div>
        </main>
        <footer class="Footer">
            <Footer/>
        </footer>
    </div>
  );
}

export default App;
