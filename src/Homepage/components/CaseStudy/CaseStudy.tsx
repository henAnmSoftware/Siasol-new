import { useState } from "react";
import {
  floatingLeftImg,
  floatingRightImg,
  groundMoutedLeftImg,
  groundMoutedRightImg,
} from "../../../assets/imgMangaer";
import "./CaseStudy_style.css";

const caseStudies = [
  {
    title: "Roof Installation",
    description:
      "A very common installation type with multiple safety hazards presented to the O&M teams. Siasol offers a pinpoint location of faulty panels in order to reduce the necessary costs involved in high altitude labor",
    mediaRight:
      "https://storage.googleapis.com/siasol-upload/detection_flights/65649338133cf77e58f81ee3/raw/thermal/DJI_20231123093126_0001_T.MP4",
    mediaLeft:
      "https://storage.googleapis.com/siasol-upload/detection_flights/65649338133cf77e58f81ee3/raw/eo/DJI_20231123093126_0001_V.MP4",
  },
  {
    title: "Floating Sites",
    description:
      "Siasol’s ability to analyze video footage allows us to easily detect faults in hard to reach installations with custom surfaces such as water reservoirs.",
    mediaRight: floatingRightImg,
    mediaLeft: floatingLeftImg,
  },
  {
    title: "Ground Mounted ",
    description:
      "Large sites are no longer an issue, with drone footage offering quick coverage and high resolution imaging, and our proprietary algorithms capable of handling large volumes of footage.",
    mediaRight: groundMoutedRightImg,
    mediaLeft: groundMoutedLeftImg,
  },
];
const CaseStudy = ({ caseStudy }) => {
  const [media, setMedia] = useState("Thermal"); // OR "Optical"
  return (
    <div className="caseStudy-item">
      <div className="caseStudy-texts-container">
        <h2 className="caseStudy-title">{caseStudy.title}</h2>
        <h5 className="caseStudy-description">{caseStudy.description}</h5>
      </div>
      <OneMediaView caseStudy={caseStudy} media={media} setMedia={setMedia} />
      <div className="caseStudy-medias-container">
        <div className="caseStudy-media-container">
          {caseStudy?.mediaLeft?.includes("storage.") ? (
            <video
              className="caseStudy-media"
              src={caseStudy?.mediaLeft}
              autoPlay
              loop
              muted
            />
          ) : (
            <img className="bookADemo-image" src={caseStudy?.mediaLeft} />
          )}
        </div>
        <div className="caseStudy-media-container">
          {caseStudy?.mediaLeft?.includes("storage.") ? (
            <video
              className="caseStudy-media"
              src={caseStudy?.mediaRight}
              autoPlay
              loop
              muted
            />
          ) : (
            <img className="caseStudy-media" src={caseStudy?.mediaRight} />
          )}
        </div>
      </div>
    </div>
  );
};

const OneMediaView = ({ caseStudy, media, setMedia }) => {
  let mediaToDisplay =
    media === "Thermal" ? caseStudy.mediaRight : caseStudy.mediaLeft;
  return (
    <div className="caseStudy-one-media-and-button-container">
      <div className="caseStudy-media-container">
        {mediaToDisplay?.includes("storage.") ? (
          <video
            className="caseStudy-media"
            controlsList="nofullscreen"
            src={mediaToDisplay}
            autoPlay
            loop
            muted
          />
        ) : (
          <img className="bookADemo-image" src={mediaToDisplay} />
        )}
      </div>
      <button
        onClick={() => setMedia(media === "Thermal" ? "Optical" : "Thermal")}
      >
        Checkout {media === "Thermal" ? "Optical" : "Thermal"}
      </button>
    </div>
  );
};

export const CaseStudySection = () => {
  return (
    <div id="CaseStudy" className="caseStudy-section-container">
      {caseStudies.map((caseStudy, index) => (
        <CaseStudy caseStudy={caseStudy} key={`${caseStudy}${index}`} />
      ))}
    </div>
  );
};
