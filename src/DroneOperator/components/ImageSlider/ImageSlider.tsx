import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./image-slider_style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="image-slider">
      {/* <div className="image">
        <img src={imageUrls[imageIndex]} />
        <div className="buttons-container">
          <button
            disabled={imageIndex === 0}
            onClick={() => setImageIndex(imageIndex - 1)}
          >
            <KeyboardArrowLeftIcon />
          </button>
          <button
            disabled={imageIndex === imageUrls.length - 1}
            onClick={() => setImageIndex(imageIndex + 1)}
          >
            <KeyboardArrowRightIcon />
          </button>
        </div>
      </div> */}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imageUrls.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
