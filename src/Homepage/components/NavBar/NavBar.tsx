import React from "react";
import "./NavBar_style.css";
import { ContactUsButton } from "../../../ui-kit/ContactUsButton";
import { siasolLogo } from "../../../assets/imgMangaer";
import { ReactComponent as ReactLogo } from "../../../assets/siasol_logo_square.svg";

const navBarContent = ["About", "Case Study", "Pannel Fault", "Drone Operator"];

export const NavBar = () => {
  return (
    <div className="nav-bar_container">
      <div className="left-nav">
        <div className="nav-bar-logo">
          {/* <img src={siasolLogo} /> */}
          <ReactLogo />
        </div>
        <nav>
          {navBarContent.map((navTitle, index) => (
            <a className="nav-title" key={index}>
              {navTitle}
            </a>
          ))}
        </nav>
      </div>
      <div className="right-nav">
        <ContactUsButton />
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};
