import { useEffect, useState, useRef } from "react";
import { useMatchMedia } from "../../../hooks/useMatchMedia.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageSlider } from "../ImageSlider/ImageSlider";

import "./flight-path-example_style.css";

export function FlightPathExamples({ flightPathExamples }) {
  const isDesktopResolution = useMatchMedia("(min-width:992px)", true);

  return (
    <div className="flight-path-container">
      <h2>Flight Path</h2>
      {flightPathExamples.map((example) => {
        return (
          <div key={example.id} className="example">
            <h6>{example.title}</h6>
            <p>{example.paragraph}</p>
            <div>
              {isDesktopResolution ? (
                <div className="image-container">
                  <img src={example.imageUrls[0]} />
                  <img src={example.imageUrls[1]} />
                </div>
              ) : (
                <ImageSlider imageUrls={example.imageUrls} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
