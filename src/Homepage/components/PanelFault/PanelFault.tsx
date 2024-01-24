import "./PanelFault_style.css";
import {
  hotspotImg,
  PIDImg,
  multiHotspotImg,
  burnedDiodesImg,
  shadingImg,
  disconnectedStringImg,
} from "../../../assets/imgMangaer";

const panelFaults = [
  {
    title: "Hotspot",
    description:
      "Dirty panels can develop long term damage in the form of hotspots. Left untreated, these can lead to major burns and full out electrical fire.",
    iconSrc: hotspotImg,
  },
  {
    title: "PID",
    description:
      "Dirty panels can develop long term damage in the form of hotspots. Left untreated, these can lead to major burns and full out electrical fire.",
    iconSrc: PIDImg,
  },
  {
    title: "Multiple Hotspots",
    description:
      "Dirty panels can develop long term damage in the form of hotspots. Left untreated, these can lead to major burns and full out electrical fire.",
    iconSrc: multiHotspotImg,
  },
  {
    title: "Burned Diodes",
    description:
      "Dirty panels can develop long term damage in the form of hotspots. Left untreated, these can lead to major burns and full out electrical fire.",
    iconSrc: burnedDiodesImg,
  },
  {
    title: "Shading",
    description:
      "Large sites are no longer an issue, with drone footage offering quick coverage and high resolution imaging, and our proprietary algorithms capable of handling large volumes of footage.",
    iconSrc: shadingImg,
  },
  {
    title: "Disconnected string",
    description:
      "Large sites are no longer an issue, with drone footage offering quick coverage and high resolution imaging, and our proprietary algorithms capable of handling large volumes of footage.",
    iconSrc: disconnectedStringImg,
  },
];

const PanelFault = ({ panelFault }) => (
  <div className="panel-fault-container">
    <div className="panel-fault-img-container">
      <img className="panel-fault-img" src={panelFault.iconSrc} />
    </div>
    <div className="panel-fault-texts-container">
      <h3 className="panel-fault-item-title">{panelFault.title}</h3>
      <h6 className="panel-fault-item-subtitle">{panelFault.description}</h6>
    </div>
  </div>
);

export const PanelFaultSection = () => {
  return (
    <div id={"PanelFault"} className="panelFault-section-container">
      <div className="panel-fault-title-container">
        <h2 className="panel-fault-title">Panel Fault</h2>
      </div>
      <div className="items-container">
        {panelFaults.map((panelFault, index) => (
          <PanelFault panelFault={panelFault} key={`${panelFault}${index}`} />
        ))}
      </div>
    </div>
  );
};
