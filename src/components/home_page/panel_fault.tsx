import "./panel_fault.css";
import {
  hotspotImg,
  PIDImg,
  multiHotspotImg,
  burnedDiodesImg,
  shadingImg,
  disconnectedStringImg,
} from "../../public/assets/imgMangaer";

const panelFaults = [
  {
    title: "Hotspot",
    description:
      "Panels can develop long term damage in the form of hotspots. left untreated, it can lead to backsheet burnouts and electrical fire.",
    iconSrc: hotspotImg,
  },
  {
    title: "PID",
    description:
      "Potential-induced performance degradation is caused by so-called stray currents. This effect may cause power loss of up to 30 percent.",
    iconSrc: PIDImg,
  },
  {
    title: "Multiple Hotspots",
    description:
      "If the root cause for hotspots isn’t identified and taken care of, multiple hotspots can develop, further decreasing the output and increasing risk.",
    iconSrc: multiHotspotImg,
  },
  {
    title: "Burned Diodes",
    description:
      "Diodes prevent back current from damaging the cells in the panel. When one or more is burned, the panel output is dramatically reduced and its neighboring effect increases.",
    iconSrc: burnedDiodesImg,
  },
  {
    title: "Shading",
    description:
      "Shaded panels not only produce less electrical energy, but can also develop permanent damage like hotspot, optimizer failure, and can affect neighboring panels and inverters.",
    iconSrc: shadingImg,
  },
  {
    title: "Disconnected string",
    description:
      "Faulty panels in a string can severely affect its electrical behavior, up to to point when the inverter disconnects the entire string.",
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
