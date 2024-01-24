import "./home_page.css";
import { About } from "../../components/home_page/about";
import { CaseStudySection } from "../../components/home_page/case_study";
import { PanelFaultSection } from "../../components/home_page/panel_fault";
import { BookADemoSection } from "../../components/home_page/book_a_demo";
import { FooterSection } from "../../components/home_page/footer";
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
