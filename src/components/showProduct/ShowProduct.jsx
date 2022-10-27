import React from "react";
import "./ShowProduct.css";
import Products from "../products/Products";
import { useContext } from "react";
import { AllProducts } from "../../App";

function ShowProduct() {
  const [products] = useContext(AllProducts);
  return (
    <div className="heading-showProduct">
      <div className="container">
        <h1 className="text-center">Top Products</h1>
        <span className="header-separator"></span>
      </div>

      <div className="container">
        <div className="product-cards row g-2">
          {products.map((products) => (
            <Products id={products.id} product={products}></Products>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
