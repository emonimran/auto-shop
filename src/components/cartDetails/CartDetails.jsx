import React from "react";
import { useContext } from "react";
import "./CartDetails.css";
import { CartContext } from "../../App";

export default function CartDetails({ pd }) {
  const [cart, setCart] = useContext(CartContext);
  const handleQuantityIncrement = () => {
    const existingProduct = cart.find((product) => product.id === pd.id);
    // console.log(existingProduct);
    const otherProducts = cart.filter((product) => product.id !== pd.id);
    console.log(otherProducts);
    if (existingProduct) {
      pd.quantity += 1;
      setCart([...otherProducts, existingProduct]);
    }
  };
  const handleQuantityDecrement = () => {
    const existingProduct = cart.find((product) => product.id === pd.id);
    // console.log(existingProduct);
    const otherProducts = cart.filter((product) => product.id !== pd.id);
    console.log(otherProducts);
    if (existingProduct && pd.quantity > 1) {
      pd.quantity -= 1;
      setCart([...otherProducts, existingProduct]);
    } else if (existingProduct && pd.quantity === 1) {
      setCart([...otherProducts]);
    }
  };

  const handleProductRemove = () => {
    const otherProducts = cart.filter((product) => product.id !== pd.id);
    setCart([...otherProducts]);
  };
  console.log(cart);
  return (
    <>
      <tr>
        <th scope="row" className="align-middle">
          <i
            class="fa-solid fa-circle-xmark remove-btn"
            onClick={() => handleProductRemove()}
          ></i>
        </th>
        <td className="align-middle text-center table-content">
          <img src={pd.image} alt="" />
        </td>
        <td className="align-middle ps-3 table-content">
          {pd.model} {pd.brand} {pd.year}- {pd.color}
        </td>
        <td className="align-middle ps-3 table-content">${pd.price}</td>
        <td className="align-middle ps-3 table-content">
          {" "}
          <button
            className="btn btn-light arrow-left"
            onClick={() => handleQuantityDecrement()}
          >
            &#60;
          </button>{" "}
          {pd.quantity}
          <button
            className="btn btn-light arrow-right"
            onClick={() => handleQuantityIncrement()}
          >
            &#62;
          </button>{" "}
        </td>
        <td className="align-middle ps-3 table-content">
          ${(pd.quantity * pd.price).toFixed(2)}
        </td>
      </tr>{" "}
    </>
  );
}
