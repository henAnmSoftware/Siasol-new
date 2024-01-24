import React from "react";
import "./Homepage_style.css";
import { aboutBG } from "../../assets/imgMangaer";
import { About } from "../../components/home_page/about";
import { CaseStudySection } from "../../components/CaseStudy/CaseStudy";
import { PanelFaultSection } from "../../components/PanelFault/PanelFault";
import { BookADemoSection } from "../../components/BookADemo/BookADemo";
import { FooterSection } from "../../components/HomePageFooter/Footer";
import ResponsiveAppBar from "../../components/About/AppBar/AppBar";
import { register } from "swiper/element/bundle";

export const Homepage = () => {
  register();
  return (
    <div className="bg_container">
      <About />
      <CaseStudySection />
      <PanelFaultSection />
      <BookADemoSection />
      <FooterSection />
    </div>
  );
};
