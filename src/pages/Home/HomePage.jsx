import React from "react";

/* Componet */
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main";
import Content from "../../components/Content/Content";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ParallaxSection from "../../components/UI/ParallaxSection";

const Home = () => {
  return (
    <div>
      <Header />

      <ParticleBackground />

      <ParallaxSection
        speed={0.12}
        fadeOutOnScroll
        fadeDistanceMultiplier={0.95}
      >
        <Content />
      </ParallaxSection>

      <Main />

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Home;
