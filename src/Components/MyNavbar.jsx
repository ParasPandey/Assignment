import React from "react";
import "../Css/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import UserIcon from "../assests/icon/user-plus.svg";
import MapIcon from "../assests/icon/map-pin.svg";
import FrameIcon from "../assests/icon/Frame 7030.svg";
import DropdownImg from "../assests/dropdown_img.png";

const MyNavbar = () => {
  return (
    <>
      {/* using react bootstrap */}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            Ship<span className="nav-colored">Up</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Company" id="basic-nav-dropdown">
                <div className="left-part">
                  <p className="heading">Company</p>
                  <div className="content">
                    <div className="each-content">
                      <div className="cntent-icon">
                        <p>
                          <img src={UserIcon} />
                        </p>
                      </div>
                      <div className="content-text">
                        <p className="content-heading">About US</p>
                        <p className="text">
                          The people behind ShipUp and the story of shared
                          success.
                        </p>
                      </div>
                    </div>
                    <div className="each-content">
                      <div className="cntent-icon">
                        <img src={MapIcon} />
                      </div>
                      <div className="content-text">
                        <p className="content-heading">Prtner With Us</p>
                        <p className="text">
                          Collbration with ShipUp and drive mutual growth
                        </p>
                      </div>
                    </div>
                    <div className="each-content">
                      <div className="cntent-icon">
                        <img src={FrameIcon} />
                      </div>
                      <div className="content-text">
                        <p className="content-heading">Career</p>
                        <p className="text">Join the ShipUp </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-part">
                  <p className="heading">Newsroom</p>
                  <img src={DropdownImg} />
                  <p className="news-awards">News and awards</p>
                  <p className="learn-more">Learn More</p>
                </div>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="#">Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Soutions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Industries</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Insights</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#"> News and Media</Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="nav-btns d-flex justify-content-start">
              <button class="btn btn-req">Request Quote</button>
              <button class="btn btn-join">Join Now</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
