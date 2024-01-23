import {
  condition1,
  condition2,
  condition3,
  cameraSpecs1,
  cameraSpecs2,
  cameraSpecs3,
  cameraSpecs4,
  droneHeight1,
  droneHeight2,
  flightPathVideoLeft,
  flightPathVideoRight,
  flightPathOrthomosaicPhotoRLeft,
  flightPathOrthomosaicPhotoRight,
} from "../assets/imgMangaer";
import "./drone-operator_styles.css";
import { ItemList } from "./components/ItemList/ItemList";
import { FlightPathExamples } from "./components/FlightPathExample/FlightPathExample";

const conditions = {
  mainTitle: "Conditions",
  content: [
    {
      id: 1,
      title: "Time of Day",
      content: "Footage should be taken between 10:00 to 14:00",
      iconUrl: condition1,
    },
    {
      id: 2,
      title: "Full Radiation",
      content: "When peak solar radiation is available",
      iconUrl: condition2,
    },
    {
      id: 3,
      title: "Clear Skies",
      content: "The skies should be clear of clouds",
      iconUrl: condition3,
    },
  ],
};

const droneHeight = {
  mainTitle: "Drone Height",
  content: [
    {
      id: 1,
      title: "Video Footage",
      content:
        "UVideo footage should be taken from a height of 15m above the panels level in thermal and visible spectra",
      iconUrl: droneHeight1,
    },
    {
      id: 2,
      title: "Orthomosaic Photo",
      content:
        "Orthomosaic photos should be taken from heights between 25m to 50m in the visible spectrum",
      iconUrl: droneHeight2,
    },
  ],
};
const cameraSpecs = {
  mainTitle: "Camera Specs",
  content: [
    {
      id: 1,
      title: "White Hot",
      content: "Use a white hot thermal camera",
      iconUrl: cameraSpecs1,
    },
    {
      id: 2,
      title: "Angle",
      content: "The camera’s pitch angle should be perpendicular to the panels",
      iconUrl: cameraSpecs2,
    },
    {
      id: 3,
      title: "Min Resolution ",
      content: "With minimum resolution of 640x512px",
      iconUrl: cameraSpecs3,
    },
    {
      id: 4,
      title: "Focus ",
      content: "The focus should be on the panels’ plane, not the ground",
      iconUrl: cameraSpecs4,
    },
  ],
};

const flightPathExamples = [
  {
    id: 1,
    title: "Video Footage",
    paragraph:
      "When taking the video footage, the drone must follow a snake path from the South-Eastern most part of the site to the North-western. The path can be parallel or perpendicular to the panel strings, depending on the installation as long as all the panels in the system are completely shown in one of the taken videos",
    imageUrls: [flightPathVideoLeft, flightPathVideoRight],
  },
  {
    id: 2,
    title: "Orthomosaic Photo",
    paragraph:
      "When taking the orthomosaic photos, the drone should always follow a parallel path to the panel strings, no matter how to prevent stitching artifacts.",
    imageUrls: [
      flightPathOrthomosaicPhotoRLeft,
      flightPathOrthomosaicPhotoRight,
    ],
  },
];

export function DroneOperator() {
  return (
    <div className="drone-operator">
      <header>Drone Operator instruction</header>
      <section className="instructions-container">
        <ItemList data={conditions} />
        <ItemList data={cameraSpecs} />
        <ItemList data={droneHeight} />
        <FlightPathExamples flightPathExamples={flightPathExamples} />
      </section>
    </div>
  );
}
