import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

function CarouselHeader() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>We sell beasts</h3>
            <p>Power your life with the best service.</p>
            <div className="advantages d-flex align-items-center justify-content-center">
              <p className="pe-4">
                <i class="fa-solid fa-arrow-up-from-bracket pe-2"></i>Save time
                and money
              </p>
              <p>
                <i class="fa-solid fa-arrow-up-from-bracket pe-2"></i>Authentic
                and best service
              </p>
            </div>
            <button className="order-now btn btn-danger">Order now</button>
            <button className="contact-us btn btn-outline-light">
              Contact us
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h3>We sell beasts</h3>
            <p>Power your life with the best service.</p>
            <div className="advantages d-flex align-items-center justify-content-center">
              <p className="pe-4">
                <i class="fa-solid fa-arrow-up-from-bracket pe-2"></i>Save time
                and money
              </p>
              <p>
                <i class="fa-solid fa-arrow-up-from-bracket pe-2"></i>Authentic
                and best service
              </p>
            </div>
            <button className="order-now btn btn-danger">Order now</button>
            <button className="contact-us btn btn-outline-light">
              Contact us
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h3>We sell beasts</h3>
            <p>Power your life with the best service.</p>
            <div className="advantages d-flex align-items-center justify-content-center">
              <p className="pe-4">
                <i class="fa-solid fa-arrow-up-from-bracket pe-2"></i>Save time
                and money
              </p>
              <p>
                <i class="fa-solid fa-arrow-up-from-bracket pe-2"></i>Authentic
                and best service
              </p>
            </div>
            <button className="order-now btn btn-danger">Order now</button>
            <button className="contact-us btn btn-outline-light">
              Contact us
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselHeader;
