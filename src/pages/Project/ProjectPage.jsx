import React from "react";
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ProjectGalleryPage from "../../components/Projects/ProjectGalleryPage";
import { webProjects } from "../../data/projects";

const Project = () => (
  <div>
    <HeaderPage />
    <ParticleBackground />
    <ProjectGalleryPage
      gridClassName="paginas-web"
      projects={webProjects.slice(0, 5)}
    />
    <ScrollToTop />
    <Footer />
  </div>
);

export default Project;
