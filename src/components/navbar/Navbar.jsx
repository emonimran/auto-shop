import React from "react";
import "./Navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { CartContext } from "../../App";
import CartDropdown from "../cartDropdown/CartDropdown";
import { Link } from "react-router-dom";

function NavbarMain() {
  const [cart] = useContext(CartContext);

  const cartCount = cart.reduce(
    (count, product) => count + product.quantity,
    0
  );

  const subTotal = cart
    .reduce(
      (subTotal, product) =>
        subTotal + Number(product.price * product.quantity),
      0
    )
    .toFixed(2);

  console.log("cart", cart);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="sticky-nav"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="nav-dropdown-categories"
                className="shadow-none text-left"
              >
                <i class="fa-solid fa-bars"></i>{" "}
                <span className="ps-4">All Categories</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  className="navbar-dropdown-item"
                >
                  Action
                </Dropdown.Item>
                <NavDropdown.Divider />
                <Dropdown.Item
                  href="#/action-2"
                  className="navbar-dropdown-item"
                >
                  Another action
                </Dropdown.Item>
                <NavDropdown.Divider />
                <Dropdown.Item
                  href="#/action-3"
                  className="navbar-dropdown-item"
                >
                  Something else
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="mx-4">
                <Link to="/" className="home">
                  Home
                </Link>
              </Nav.Link>

              <NavDropdown title="Shop" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  className="navbar-dropdown-item"
                >
                  Product Category
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className="navbar-dropdown-item"
                >
                  Special Products
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className="navbar-dropdown-item"
                >
                  Top Rated Product
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Gallery" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  className="navbar-dropdown-item"
                >
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className="navbar-dropdown-item"
                >
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className="navbar-dropdown-item"
                >
                  Something
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Pages" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  href="#action/3.1"
                  className="navbar-dropdown-item"
                >
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className="navbar-dropdown-item"
                >
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className="navbar-dropdown-item"
                >
                  F.A.Q
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.4"
                  className="navbar-dropdown-item"
                >
                  Terms and Conditions
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link className="d-flex">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle className="cart-dropdown shadow-none">
                      <i class="nav-icons fa-solid fa-cart-shopping m-0 p-0 position-relative"></i>
                      <span class="translate-middle badge rounded-pill bg-danger">
                        {cartCount}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="drop-cart">
                      <Dropdown.Item>
                        <p></p>
                      </Dropdown.Item>
                      {cart.map((pd) => (
                        <CartDropdown pd={pd} />
                      ))}
                      <Dropdown.Item>
                        <p className="sub-total mx-5 d-flex justify-content-between">
                          {" "}
                          <span className="subtotal-text">
                            {" "}
                            Subtotal:{" "}
                          </span>{" "}
                          <span className="total-price">${subTotal}</span>{" "}
                        </p>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                          <Link to="/cart">
                            <button className="btn btn-dark view-cart-btn">
                              VIEW CART
                            </button>
                          </Link>
                          <button className="btn btn-danger">CHECKOUT</button>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <span>
                  <a href="#/">
                    <i class="nav-icons fa-solid fa-rotate mt-2 ms-3 nav-icons-no"></i>
                    <span class="translate-middle badge rounded-pill bg-danger">
                      0
                    </span>
                  </a>
                </span>
                <span>
                  <a href="#/" className="my-auto">
                    <i class="nav-icons fa-solid fa-heart mt-2 ms-4"></i>
                    <span class="translate-middle badge rounded-pill bg-danger">
                      0
                    </span>
                  </a>
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMain;
