import main from "./images/main.jpg";
import chef from "./images/chef.png";
import Menu from "./Menu";
import Review from "./Reviews";
import { Link, Route, Routes } from "react-router-dom";
import BookingPage from "./BookingPage";
import OrderOnline from "./OrderOnline";

function Home () {
    return (
        <main>
            <div className="Hero">
                <div className="Hero_left">
                <h3>Little Lemon</h3>
                <h4>Chicago</h4>
                <p>Lorem ipsum, or lipsum as it is sometimes
                    known, is dummy text used in laying out print, graphic or web design.</p>
                <Link to="./BookingPage.js"><button type="submit">Reserve a Table</button></Link>
                </div>
                <div className="Hero_right">
                    <img src={main} className="main_image" alt="" width="100px" height="auto"></img>
                </div>
            </div>
             <div className="Specials">
                <div className="Specials_title">
                    <h3>This Weeks Specials!</h3>
                    <Link to="./OrderOnline.js"><button type="submit">Order Online</button></Link>
                </div>
                <div>
                    <Menu/>
                </div>
            </div>
            <div>
                <div className="Testimonials">
                <h4>Testimonials</h4>
                </div>
                <div>
                    <Review/>
                </div>
            </div>
            <div className="About">
                <div className="AA">
                    <h3>Little Lemon</h3>
                    <h4>Chicago</h4>
                    <p>Lorem ipsum, or lipsum as it is sometimes.
                        known, is dummy text used in laying out print,
                        graphic or web design.</p>
                </div>
                <div className="Ab">
                    <img src={chef} alt="" width="100px" height="auto"></img>
                </div>
            </div>
            {/* <Routes>
            <Route path="./BookingPage.js" element={<BookingPage />}></Route>
            <Route path="./OrderOnline.js" element={<OrderOnline/>}></Route>
            </Routes> */}
        </main>
    );
}
export default Home;