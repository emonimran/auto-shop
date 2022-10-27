import React from "react";
import './Header.css'
import logo from "../assets/images/Black_n_White_Luxury__Rent_Car_Logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";


function Header() {


  return (
    <>
      <div className="container">
      <div className="row header">
        <div className="col-md-3 d-flex">
          <Link to ="/"><img src={logo} alt="auto-shop logo" className="logo" /></Link>
        </div>
        <div className="container col-md-5 m-auto search-box rounded">
          <div className="search-products d-flex">
            <input type="search" placeholder="Search products..." className="header-search shadow-none" /> <span className="vertical-line">|</span>
            <Dropdown className="ps-4">
              <Dropdown.Toggle id="dropdown-categories" className="categories-dropdown shadow-none">
                All Categories   
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div>
            <Button variant="danger" className="search-btn ms-4 shadow-none"><i class="fa-solid fa-magnifying-glass"></i></Button>
            </div>
            
          </div>
        </div>
        <div className="right-icons col-md-4 d-flex justify-content-end my-auto">
          <i class="fa-solid fa-phone my-auto me-2"></i>
          <p className="my-auto me-2">+88 01788287689 |</p>
          <i class="fa-brands fa-facebook-f my-auto me-2"></i>
          <i class="fa-brands fa-twitter my-auto me-2"></i>
          <i class="fa-brands fa-linkedin-in my-auto me-2"></i>
          <i class="fa-brands fa-instagram my-auto"></i>
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Header;
