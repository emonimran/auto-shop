import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-div container-fluid p-0">
      <footer className="text-center text-lg-start">
        <div className="footer-contents">
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    auto-Shop
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti at possimus cupiditate quod ipsa maxime.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>
                  <p>
                    <a href="/">Lorem</a>
                  </p>
                  <p>
                    <a href="/">Lorem</a>
                  </p>
                  <p>
                    <a href="/">Lorem</a>
                  </p>
                  <p>
                    <a href="/">Lorem</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-1">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="footer-icons fas fa-home me-3"></i> Road: 01,
                    Block: A, Bashundhara, Dhaka
                  </p>
                  <p>
                    <i className="footer-icons fas fa-envelope me-3"></i>{" "}
                    info@autoshop.com
                  </p>
                  <p>
                    <i className="footer-icons fas fa-phone me-3"></i> + 0171
                    XXX XXX
                  </p>
                  <p>
                    <i className="footer-icons fas fa-print me-3"></i> + 0171
                    XXX XXX
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>

                  <a
                    className="btn btn-primary btn-floating m-1 media-icon-btn"
                    style={{ backgroundColor: "#3b5998" }}
                    href="/"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1 media-icon-btn"
                    style={{ backgroundColor: "#55acee" }}
                    href="/"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1 media-icon-btn"
                    style={{ backgroundColor: "#dd4b39" }}
                    href="/"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1 media-icon-btn"
                    style={{ backgroundColor: "#ac2bac" }}
                    href="/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1 media-icon-btn"
                    style={{ backgroundColor: "#0082ca" }}
                    href="/"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1 media-icon-btn"
                    style={{ backgroundColor: "#333333" }}
                    href="/"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div
            className="text-center p-2 mt-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a href="/"> autoshop.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
