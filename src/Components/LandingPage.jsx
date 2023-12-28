import React, { useState } from "react";
import "../Css/LandingPage.css";
import mainImage from "../assests/main-image.jpg";
import { FaVideo } from "react-icons/fa";
import videoIcon from "../assests/icon/video.svg";
import Modal from "react-bootstrap/Modal";

const LandingPage = () => {
  const [isPopupOpen, setIsPopUpOpen] = useState(false);

  const OpenVideo = () => {
    setIsPopUpOpen(true);
  };
  const closePopup = () => {
    setIsPopUpOpen(false);
  };

  return (
    <>
      {isPopupOpen && (
        //use react-bootrap Modal
        <Modal show={isPopupOpen} onHide={closePopup}>
          <Modal.Header closeButton>
            <Modal.Title>Demo Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/bMknfKXIFA8"
              allowFullscreen
            ></iframe>
          </Modal.Body>
        </Modal>
      )}
      <div class="container landing-page">
        <div class="row">
          <div class="col left-component">
            <div className="content-div">
              <p className="header">
                Quick & Reliable <span>Warehousing and logistics</span>{" "}
                Solution.
              </p>
              <p className="small-txt">
                ShipUp delivers an unparalleled customer service through
                dedicated customer teams, engaged people working in an agile
                culture, and a global footprint
              </p>
            </div>
            <div className="left-component-btns">
              <button class="btn btn-join">Join Now</button>
              <button
                class="btn btn-demo"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={OpenVideo}
              >
                <div className="svg">
                  <FaVideo />
                  {/* <img src={videoIcon} /> */}
                </div>
                Play Demo
              </button>
            </div>
          </div>
          <div class="col right-component">
            <img src={mainImage} alt="image.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
