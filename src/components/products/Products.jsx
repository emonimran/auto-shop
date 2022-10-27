import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../../App";
import fakeData from "../fakeData";
import "./Products.css";

function Products(props) {
  const { id, model, year, brand, price, color, image } = props.product;
  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = () => {
    const existingProduct = cart.find((pd) => pd.id === id);
    const otherProducts = cart.filter((pd) => pd.id !== id);
    if (existingProduct) {
      props.product.quantity += 1;
      setCart([...otherProducts, existingProduct]);
    } else {
      const newCart = fakeData.find((pd) => pd.id === id);
      props.product.quantity = 1;
      setCart([...cart, newCart]);
    }

    console.log("existing", existingProduct);
    console.log("other", otherProducts);
  };

  console.log(cart);

  return (
    <>
      <div className="col-md-3">
        <Card className="me-1">
          <div className="card-image-wrapper">
            <Card.Img
              variant="top"
              src={image}
              className="img-fluid card-image"
            />
          </div>
          <Card.Body className="text-center">
            <Card.Title>{model}</Card.Title>
            <Card.Text>
              {brand} {year} - {color}
              <br />
              <span>
                ${price}{" "}
                <span className="line-through">
                  {" "}
                  ${(price - (price * 10) / 100).toFixed(2)}
                </span>{" "}
              </span>
            </Card.Text>
            <div className="buttons">
              <Button
                variant="outline-danger"
                className="card-button shadow-none"
                onClick={() => handleAddToCart()}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline-danger"
                className="card-button card-icon-btn shadow-none"
              >
                <i class="fa-regular fa-heart"></i>
              </Button>
              <Button
                variant="outline-danger"
                className="card-button card-icon-btn shadow-none"
              >
                <i class="fa-solid fa-signal"></i>
              </Button>
            </div>
            <div className="sale-tag">SALE</div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Products;
