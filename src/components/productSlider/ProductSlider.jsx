import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { AllProducts } from "../../App";
import ProductsSliderItems from "../productSliderItems/ProductsSliderItems";
import "./ProductSlider.css";

export default function ProductSlider() {
  const [products] = useContext(AllProducts);

  return (
    <div className="product-slider-section">
      <div className="mt-4 container justify-content-center">
        <h1 className="text-center">Deals Of The Day</h1>
        <span className="header-separator"></span>
        <Swiper
          className="py-5"
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          slidesPerView={5}
          spaceBetween={30}
        >
          {products.map((product) => (
            <SwiperSlide>
              <ProductsSliderItems product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
