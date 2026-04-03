import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = lazy(() => import("./pages/Home/HomePage"));
const About = lazy(() => import("./pages/About/AboutPage"));
const Services = lazy(() => import("./pages/Service/ServicesPage"));
const Project = lazy(() => import("./pages/Project/ProjectPage"));
const ProjectApp = lazy(() => import("./pages/Project/ProjectApp"));
const ProjectGame = lazy(() => import("./pages/Project/ProjectGame"));

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
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
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Services />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/project/app" element={<ProjectApp />} />
          <Route path="/project/game" element={<ProjectGame />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
