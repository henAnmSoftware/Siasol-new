import "./Footer_style.css";
import { footerImg, footerShadowImg } from "../../assets/imgMangaer";
import Form from "./Form/Form";
import { ReactComponent as ReactLogo } from "../../assets/siasol_logo_square.svg";

export const FooterSection = () => {
  return (
    <div
      id="ContactUs"
      className="footer-section-container"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="footer-inner-container">
        <div className="footer-top-container">
          <Form />
        </div>
        <div className="footer-bottom-container">
          <div className="footer-bottom-left-container">
            <div className="footer-bottom-left-menu-container">
              <p>About</p>
              <p>Case Study</p>
              <p>Panel Fault</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="footer-bottom-right-container">
            <div className="footer-bottom-right-logo-container">
              <div className="logo">
                <ReactLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
