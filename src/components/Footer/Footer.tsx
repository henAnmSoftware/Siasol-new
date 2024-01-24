import "./Footer_style.css";
import { footerImg } from "../../assets/imgMangaer";
import Form from "./Form/Form";
import { ReactComponent as ReactLogo } from "../../assets/siasol_logo_square.svg";
import { saveAs } from 'file-saver';

export const FooterSection = () => {
  const downloadMedia = async () => {
    const proxyUrl = 'http://localhost:3001/download-media';

    try {
      const response = await fetch(proxyUrl);
      const blob = await response.blob();
  
      saveAs(blob, 'downloaded-media.mp4');
    } catch (error) {
      console.error('Error downloading media:', error);
    }
  };
  return (
    <div
      id="ContactUs"
      className="footer-section-container"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="footer-inner-container">
        <div className="footer-top-container">
        <button onClick={downloadMedia}>Download Media</button>

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
