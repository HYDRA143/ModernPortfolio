import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

const Home = lazy(() => import("./pages/Home/HomePage"));
const About = lazy(() => import("./pages/About/AboutPage"));
const Services = lazy(() => import("./pages/Service/ServicesPage"));
const Project = lazy(() => import("./pages/Project/ProjectPage"));
const ProjectApp = lazy(() => import("./pages/Project/ProjectApp"));
const ProjectGame = lazy(() => import("./pages/Project/ProjectGame"));

function App() {
  useEffect(() => {
    const initAos = () => {
      AOS.init({
        duration: 600,
        once: true,
        easing: "ease-out-cubic",
        mirror: false,
        offset: 50,
        throttleDelay: 120,
        disable: () =>
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      });
    };

    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(initAos, { timeout: 1200 });
    } else {
      window.setTimeout(initAos, 200);
    }
  }, []);

  return (
    <>
      <RouterScrollTop />
      <Suspense
        fallback={
          <div className="loading-pag">
            <div className="loader">
              <span>=(NEERAJ)=&gt;</span>
              <span>=(NEERAJ)=&gt;</span>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/app" element={<ProjectApp />} />
          <Route path="/project/game" element={<ProjectGame />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
