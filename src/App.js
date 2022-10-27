import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fakeData from "./components/fakeData";

import Header from "./components/header/Header.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import ShowProduct from "./components/showProduct/ShowProduct";
import ProductSlider from "./components/productSlider/ProductSlider";
import Footer from "./components/footer/Footer";
import ViewCart from "./components/viewCart/ViewCart";
import { Routes, Route } from "react-router-dom";

import { createContext, useState } from "react";

export const CartContext = createContext();

export const AllProducts = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const first12 = fakeData.slice(0, 12);
  const [products, setProducts] = useState(first12);

  return (
    <>
      <CartContext.Provider value={[cart, setCart]}>
        <AllProducts.Provider value={[products, setProducts]}>
          <Header />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Carousel />
                  <ProductSlider />
                  <ShowProduct />
                </>
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <>
                  <ViewCart />
                </>
              }
            ></Route>
          </Routes>
          <Footer />
        </AllProducts.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
