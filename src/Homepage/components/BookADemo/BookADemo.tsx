import "./BookADemo_style.css";
import { siasolPoralOnMacImg } from "../../../assets/imgMangaer";
import { Fragment } from "react";

const RowView = () => {
  return (
    <div className="bookADemo-row-view-section-container">
      <div className="bookADemo-left-container">
        <div className="bookADemo-orange-container"></div>
        <div className="bookADemo-texts-container">
          <h4 className="bookADemo-line-1">Leave your details below</h4>
          <h4 className="bookADemo-line-2">TO GET</h4>
          <h4 className="bookADemo-line-3">
            a <strong>free demo</strong> of our portal
          </h4>
          <button className="bookADemo-button">Book a demo</button>
        </div>
      </div>
      <div className="bookADemo-right-container">
        <img className="bookADemo-image" src={siasolPoralOnMacImg} />
      </div>
    </div>
  );
};

const ColumnView = () => {
  return (
    <div className="bookADemo-column-view-section-container">
      <div className="bookADemo-top-container">
        <img className="bookADemo-image" src={siasolPoralOnMacImg} />
      </div>
      <div className="bookADemo-bottom-container">
        <div className="bookADemo-texts-container">
          <h4 className="bookADemo-line-1">Leave your details below</h4>
          <h4 className="bookADemo-line-2">TO GET</h4>
          <h4 className="bookADemo-line-3">
            a <strong>free demo</strong> of our portal
          </h4>
          <button className="bookADemo-button">Book a demo</button>
        </div>
      </div>
    </div>
  );
};

export const BookADemoSection = () => {
  return (
    <Fragment>
      <RowView />
      <ColumnView />
    </Fragment>
  );
};
