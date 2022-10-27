import React, { useContext } from "react";
import "./ProductsSliderItems.css";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../App";
import fakeData from "../fakeData";

export default function ProductsSliderItems({ product }) {
  const [cart, setCart] = useContext(CartContext);

  const { id } = product;

  const handleAddToCart = () => {
    const existingProduct = cart.find((pd) => pd.id === id);
    const otherProducts = cart.filter((pd) => pd.id !== id);
    if (existingProduct) {
      product.quantity += 1;
      setCart([...otherProducts, existingProduct]);
    } else {
      const newCart = fakeData.find((pd) => pd.id === id);
      product.quantity = 1;
      setCart([...cart, newCart]);
    }
  };

  console.log("slide item", product);
  return (
    <>
      <div className="image-wrapper">
        <img src={product.image} alt="" className="slider-image" />
      </div>
      <div className="slider-buttons d-flex justify-content-center">
        <Button
          variant="outline-danger"
          className="card-button shadow-none"
          onClick={() => handleAddToCart()}
        >
          <i class="fa-solid fa-cart-arrow-down"></i>
        </Button>
        <Button variant="outline-danger" className="card-button shadow-none">
          <i class="fa-regular fa-heart"></i>
        </Button>
        <Button variant="outline-danger" className="card-button shadow-none">
          <i class="fa-solid fa-signal"></i>
        </Button>
      </div>
      <div className="discount-tag text-center">-30%</div>
      <p className="slider-price">
        ${product.price}
        <span className="line-through ps-2">
          ${(product.price - (product.price * 30) / 100).toFixed(2)}
        </span>
      </p>
      <p className="slider-details">
        {product.brand} {product.year} - {product.color}
      </p>
    </>
  );
}
