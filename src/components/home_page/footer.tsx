import "./footer.css";
import { footerImg } from "../../assets/imgMangaer";
import Form from "./form";
import { ReactComponent as ReactLogo } from "../../public/assets/siasol_logo_square.svg";

export const FooterSection = () => {
  const jumpToContactUs = (id) => {
    console.log('jumpToContactUs clicked');
    
    const releventDiv = document.getElementById(id);
    // behavior: "smooth" parameter for smooth movement
    releventDiv?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="ContactUs"
      className="home-footer-section-container"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="home-footer-inner-container">
        <div className="home-footer-top-container">
          <Form />
        </div>
        <div className="home-footer-bottom-container">
          <div className="home-footer-bottom-left-container">
            <div className="home-footer-bottom-left-menu-container">
              <button onClick={() => jumpToContactUs('About')}>About</button>
              <button onClick={() => jumpToContactUs('CaseStudy')}>Case Study</button>
              <button onClick={() => jumpToContactUs('PanelFault')}>Panel Fault</button>
              <button onClick={() => jumpToContactUs('ContactUs')}>Contact Us</button>
            </div>
          </div>
          <div className="home-footer-bottom-right-container">
            <div className="home-footer-bottom-right-logo-container">
              <div className="home-logo">
                <ReactLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
