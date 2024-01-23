import "./items-slider_style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export function ItemsSlider({ data }) {
  return (
    <div className="items-slider">
      <h2>{data.mainTitle}</h2>
      <h6>{data.text ?? ""}</h6>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.content.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.iconUrl} />
              <p className="text-container">
                {item.title ?? ""}
                {item.upperTitle ?? ""}
                {item.content && <span>{item.content}</span>}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
