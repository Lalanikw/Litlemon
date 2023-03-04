import React from "react";
import "./Footer.css";
import logo_1 from "./images/logo_1.png"

function Footer () {
    return (
        <div className="Footer">
            <div className="logo">
                <img src={logo_1} alt="" ></img>
            </div>
            <div className="Footer_sub" >
                <h4>Menu Links</h4>
                <ul>
                    <li href="#">Home</li>
                    <li href="#">About</li>
                    <li href="#">Menu</li>
                    <li href="#">Login</li>
                </ul>
            </div>
            <div className="Contact" >
                <h4>ContactUs</h4>
                <ul>
                    <li href="#">Address</li>
                    <li href="#">Phone Number</li>
                    <li href="#">Email</li>
                </ul>
            </div>
            <div className="Social" >
                <h4>Social Media</h4>
                <ul>
                    <li href="#">Facebook</li>
                    <li href="#">Instagram</li>
                    <li href="#">Yuoutube</li>
                </ul>
            </div>
        </div>
    );
};
export default Footer;