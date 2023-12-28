import React from "react";
import "../Css/Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Instgram from "../assests/icon/Instagram.svg";
import Facebook from "../assests/icon/facebook.svg";
import Whatsapp from "../assests/icon/whatsapp.svg";
import Twitter from "../assests/icon/twitter.svg";
import Background from "../assests/icon/whitebck.svg";

const Footer = () => {
  const iconStyle = {
    backgroundImage: `url(${Background})`, // Replace with the path to your image
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 50,
    width: 50,
  };
  return (
    <footer>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div className="col-md-3 name">
            <p className="header">
              Ship<span>Up</span>
            </p>
            <p className="header-txt">
              ShipUp delivers an unparalleled customer service through dedicated
              customer teams, engaged people working in an agile culture, and a
              global footprint
            </p>
          </div>
          <div className="col-md-2">
            <p className="header">Explore</p>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Our Warehoueses</li>
              <li>Blog</li>
              <li>News and Media</li>
            </ul>
          </div>
          <div className="col-md-1">
            <p className="header">Legal</p>
            <ul className="footer-list">
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="header">Social Media</p>
            <div className="header-icons">
              <div style={iconStyle} className="each-icon">
                <img src={Facebook} />
              </div>
              <div style={iconStyle} className="each-icon">
                <img src={Twitter} />
              </div>
              <div style={iconStyle} className="each-icon">
                <img src={Whatsapp} />
              </div>
              <div style={iconStyle} className="each-icon">
                <img src={Instgram} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
            <hr/>
            <p>Ship<span className="orange-color">Up</span><span className="extra-text">.ng</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
