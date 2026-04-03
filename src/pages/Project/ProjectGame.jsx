import React from "react";
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ProjectGalleryPage from "../../components/Projects/ProjectGalleryPage";
import { gameProjects } from "../../data/projects";

const ProjectGame = () => (
  <div>
    <HeaderPage />
    <ParticleBackground />
    <ProjectGalleryPage
      gridClassName="games"
      projects={gameProjects.slice(0, 4)}
    />
    <ScrollToTop />
    <Footer />
  </div>
);

export default ProjectGame;
