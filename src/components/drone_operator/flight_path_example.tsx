import { useMatchMedia } from "../../public/hooks/useMatchMedia";

import { ImageSlider } from "./image_slider";

import "./flight_path_example.css";

export function FlightPathExamples({ flightPathExamples }) {
  const isDesktopResolution = useMatchMedia("(min-width:1024px)", true);

  return (
    <div className="flight-path-container">
      <div className="background-color">
        <h2>Flight Path</h2>
        {flightPathExamples.map((example) => {
          return (
            <div key={example.id} className="example">
              <h6 style={{marginTop: 10}} >
                <span className="bold">{example.title}</span>
              </h6>
              <p style={{marginBottom: 20}}>{example.paragraph}</p>

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
    </div>
  );
}
