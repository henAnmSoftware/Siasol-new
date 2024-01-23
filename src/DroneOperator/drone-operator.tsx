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
  wrongCapture1,
  wrongCapture2,
  wrongCapture3,
  supportedDrones1,
  supportedDrones3,
  supportedDrones2,
  supportedDrones4,
  supportedDrones5,
  supportedDrones6,
  recommendedAddOn1,
  recommendedAddOn2,
  recommendedAddOn3,
  recommendedAddOn4,
} from "../assets/imgMangaer";
import "./drone-operator_styles.css";
import { ItemList } from "./components/ItemList/ItemList";
import { FlightPathExamples } from "./components/FlightPathExample/FlightPathExample";
import { ItemsSlider } from "./components/ItemsSlider/ItemsSlider";
import { useMatchMedia } from "../hooks/useMatchMedia";
import { FooterSection } from "Homepage/components/Footer/Footer";



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

const wrongExamples = {

  mainTitle : "Wrong",
  content : [

      {id : 1,
      upperTitle: 'Color',
      iconUrl : wrongCapture1,
      content : "Do not use RGB or black hot thermal cameras"
      },
      {id : 2,
          upperTitle: 'Focus',
      iconUrl : wrongCapture2,
      content : "Keep your focus on the panels’ plane, not the ground"
      },
      {id : 3,
          upperTitle: 'Angle',
      iconUrl : wrongCapture3,
      content : "Keep your camera pointed and perpendicular to the panels."
      }
  ]
}
const supportedDrones = {

  mainTitle : "Supported Drones",
  content : [

      {id : 1,
      title: 'DJI Mavic 3T Enterprise',
      iconUrl : supportedDrones1,
      },
      {id : 2,
          title: 'DJI Matrice 30T',
      iconUrl : supportedDrones2,

      },
      {id : 3,
          title: 'DJI Matrice 300 RTK + Zenmuse H20T',
      iconUrl : supportedDrones3,
      },
      {
        id : 4,
        title: 'Autel EVO II V3 640T',
        iconUrl : supportedDrones4,
      },
      {
        id : 5,
        title: 'Teledyne FLIR SIRAS',
        iconUrl : supportedDrones5,
      },
      {
        id : 6,
        title: 'Autel EVO Max 4T',
        iconUrl : supportedDrones6,
      },
  ]
}
const recommendedAddOnCameras = {

  mainTitle : "Recommended add-on Cameras",
  content : [

      {
        id : 1,
        title: 'DJI Zenmuse XT2',
        iconUrl : recommendedAddOn1,
      },
      {
        id : 2,
        title: 'DJI Zenmuse H20N',
        iconUrl : recommendedAddOn2,

      },
      {
        id : 3,
        title: 'DJI Zenmuse H20T',
        iconUrl : recommendedAddOn3,
      },
      {
        id : 4,
        title: 'Teledyne FLIR Vue TZ20-R',
        iconUrl : recommendedAddOn4,
      }
    
  ]
}


export function DroneOperator() {
  const isDesktopResolution = useMatchMedia("(min-width:992px)", true);
  console.log(isDesktopResolution)
  return (
    <div className="drone-operator">
      <header>Drone Operator instruction</header>
      <section className="instructions-container">
        <ItemList data={conditions} />
        <ItemList data={cameraSpecs} />
        <ItemList data={droneHeight} />
        <FlightPathExamples flightPathExamples={flightPathExamples} />
        {isDesktopResolution ?  <ItemList data={wrongExamples} /> : <ItemsSlider data={wrongExamples}/>}
        <ItemList data={supportedDrones} changeClass="items-grid"/>
        <section className="orange-background-text"><h3>Siasol  supports video and orthomosaic photos taken from all of these drones, contact us to find if yours is not on the list.</h3></section>
        <ItemList data={recommendedAddOnCameras} />
        <section className="floating-text">If your drone doesn’t have a built-in thermal camera, these add-on cameras with a white hot sensor and 640x512px resolution can be used with our system</section>
        <FooterSection/>
      </section>
    </div>
  );
}
