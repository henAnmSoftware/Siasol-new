import "./book_a_demo.css";
import { siasolPoralOnMacImg } from "../../public/assets/imgMangaer";
import { Fragment } from "react";
import { useMatchMedia } from "../../public/hooks/useMatchMedia";

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
    const jumpToContactUs = () => {
        console.log('jumpToContactUs clicked');
        
        const releventDiv = document.getElementById("ContactUs");
        // behavior: "smooth" parameter for smooth movement
        releventDiv?.scrollIntoView({ behavior: "smooth" });
      };
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
          <button onClick={() => console.log('123')} className="bookADemo-button">Book a demo</button>
        </div>
      </div>
    </div>
  );
};

export const BookADemoSection = () => {
  const isDesktopResolution = useMatchMedia("(min-width:1024px)", true);
  return (
    <Fragment>{isDesktopResolution ? <RowView /> : <ColumnView />}</Fragment>
  );
};
