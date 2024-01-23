import { useMemo } from "react";
import "./About_style.css";
import {
  aboutBGVideo,
  solarEnergyIcon,
  databaseIcon,
  thermalIcon,
  compressionIcon,
  classifiersIcon,
} from "../../../assets/imgMangaer";
import NavBar from "../NavBar";
import ResponsiveAppBar from "./AppBar/AppBar";

var w = window.innerWidth;
console.log("w", w);

const VideoContainer = () => {
  return (
    <div className="video_container">
      <video src={aboutBGVideo} autoPlay loop muted />
      <div className="content">
        <div className="texts_container">
          <h1 className="about_title">SIASOL</h1>
          <h3 className="about_subtitle">
            Next Generation PV Asset Management
          </h3>
          <h4 className="about_description">
            Siasol offers image analysis and machine learning algorithms <br />{" "}
            for the early detection of solar panels faults by UAVs.
          </h4>
        </div>
        <div className="buttons_video_container">
          <button className="contact-us-button-video">Contact Us</button>
          <button className="dashboard-button-video">Dashboard</button>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    iconSrc: solarEnergyIcon,
    description:
      "A GreenPanel spinoff: Israel largest solar O&M service providers",
  },
  {
    iconSrc: databaseIcon,
    description:
      "World largest database of panels faults ant their EO signature (70K)",
  },
  {
    iconSrc: thermalIcon,
    description: "Thermal / EO footage obtained by UAV",
  },
  {
    iconSrc: compressionIcon,
    description:
      "Image compression algorithms create a Solar farm digital twin within hours",
  },
  {
    iconSrc: classifiersIcon,
    description:
      "Proprietary classifiers identify faulty panels (87% accuracy)",
  },
];
const Service = ({ service }) => (
  <div className="service-item">
    <div className="service-icon-container">
      <img src={service.iconSrc} />
    </div>
    <p>{service.description}</p>
  </div>
);

const ServicesContainer = () => {
  let updatedArray = [...services];
  return (
    <div className="services_container">
      <div className="services-list">
        {updatedArray.map((service, index) => (
          <Service service={service} key={`${service}${index}`} />
        ))}
      </div>
      <div className="who-are-we">
        <p className="who-are-we-text">
          Siasol is a spinoff company of GreenPanel,Israel largest solar O&M 
          service provider.
          <br />
          We own the world’s largest tagged dataset of PV panel.
        </p>
        <p className="who-are-we-text">
          Siasol is constantly developing the most cutting edge tools for
          predictive O&M, advanced monitoring
          <br />
          and data driven management services.
        </p>
        <p className="who-are-we-text">
          Siasol uses video footage, reducing the time required for imaging, and
          AI algorithms that can accurately
          <br />
          detect known faults.
        </p>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div id="About" className="about_container">
      <VideoContainer />
      <ServicesContainer />
    </div>
  );
};
