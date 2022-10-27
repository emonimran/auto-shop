import React from "react";
import "./ViewCart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";
import CartDetails from "../cartDetails/CartDetails";

export default function ViewCart() {
  const [cart] = useContext(CartContext);
  const totalCost = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
      <div className="cart-header">
        <div className="cart-header-contents container">
          <div className="cart-navigation">
            <h1>Cart</h1>
            <span className="d-flex">
              <Link to="/">
                {" "}
                <h4 className="pe-2 home-cart-link"> Home </h4>
              </Link>{" "}
              <h4>&gt; Cart</h4>
            </span>
          </div>
        </div>
      </div>

      <div className="table-container container mt-5">
        <div className="cart-product-showcase mt-5">
          <table className="table" style={{ height: "100px;" }}>
            <thead>
              <tr>
                <th
                  scope="col"
                  style={{ width: "5%" }}
                  className="table-heading ps-3"
                ></th>
                <th
                  scope="col"
                  style={{ width: "10%" }}
                  className="table-heading ps-3"
                ></th>
                <th
                  scope="col"
                  style={{ width: "50%" }}
                  className="table-heading ps-3"
                >
                  Product
                </th>
                <th
                  scope="col"
                  style={{ width: "15%" }}
                  className="table-heading ps-3"
                >
                  Price
                </th>
                <th
                  scope="col"
                  style={{ width: "10%" }}
                  className="table-heading"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  style={{ width: "15%" }}
                  className="table-heading ps-3"
                >
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((pd) => (
                <CartDetails pd={pd} />
              ))}
            </tbody>
          </table>
          <div className="final-calc d-flex justify-content-between my-4">
            <div className="d-flex justify-content-between align-items-center my-auto">
              <input
                type="search"
                name=""
                id=""
                className="me-2 coupon-input"
              />
              <button className="btn btn-dark">Apply Coupon</button>
            </div>
            <div>
              <p className="total-payable">
                <span className="table-heading">Total: </span>{" "}
                {totalCost.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
