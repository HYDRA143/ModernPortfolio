import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Modal from "../../pages/Project/Modal";

const imagePath = (fileName) => `${import.meta.env.BASE_URL}img/${fileName}`;

const renderText = (value, key) => {
  if (typeof value === "string") {
    return value;
  }

  return (
    <FormattedMessage
      key={key}
      id={value.id}
      defaultMessage={value.defaultMessage}
    />
  );
};

const ProjectGalleryPage = ({ gridClassName, projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading">
            <FormattedMessage id="projects" defaultMessage="Projects" />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project">
              <FormattedMessage id="site-web" defaultMessage="websites" />
            </NavLink>
            <NavLink to="/project/app">Apps</NavLink>
            <NavLink to="/project/game">
              <FormattedMessage id="games" defaultMessage="games" />
            </NavLink>
          </nav>
        </section>

        <section className={`projects__grid ${gridClassName}`.trim()}>
          {projects.map((project) => (
            <div className="projects__item" key={project.id}>
              <button
                type="button"
                className="block h-full w-full bg-transparent"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={imagePath(project.thumbnail)}
                  alt=""
                  className="projects__img"
                />
              </button>
            </div>
          ))}
        </section>
      </main>

      <Modal
        estado={Boolean(selectedProject)}
        cambiarEstado={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="content-modal">
            <div className="pw-content">
              <div className="eins-modal-preview">
                <img src={imagePath(selectedProject.previewImage)} alt="" />
              </div>
              <div className="eins-modal-text">
                {selectedProject.body.map((item, index) => (
                  <p key={`${selectedProject.id}-body-${index}`}>
                    {renderText(item, `${selectedProject.id}-body-${index}`)}
                  </p>
                ))}
                <div className="eins-modal-text-2">
                  <span>Link:</span>{" "}
                  <a
                    href={selectedProject.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selectedProject.linkLabel || selectedProject.linkUrl}
                  </a>
                </div>
                <div className="eins-modal-text-3">
                  <span>
                    <FormattedMessage
                      id="projects-tec"
                      defaultMessage="Used technology:"
                    />
                  </span>
                  <div
                    className={
                      selectedProject.techIconClassName || "eins-modal-tec"
                    }
                  >
                    {selectedProject.techIconUrls.map((iconUrl) => (
                      <img src={iconUrl} alt="" key={iconUrl} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ProjectGalleryPage;
