import React from "react";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";
import { PROFILE_NAME, PROFILE_URL } from "../../constants/profile";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="contenido">
    <ParticleHeaderBg />
    <section className="inicio" id="inicio">
      <div className="titulo">
        <p data-aos="fade-up" data-aos-delay="600">
          <FormattedMessage id="greeting" defaultMessage="Hello" />
        </p>
        <h1 data-aos="fade-up" data-aos-delay="800">
          <FormattedMessage id="name" defaultMessage={`I am ${PROFILE_NAME}`} />
        </h1>
        <p data-aos="fade-up" data-aos-delay="1000">
          <FormattedMessage id="rol" defaultMessage="Full-stack developer" />
        </p>

        <div className="wrapper">
          <a
            className="button"
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <span>Linkedin</span>
          </a>
          <a
            className="button"
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button"
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </a>
          <a
            className="button"
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            <div className="icon">
              <i className="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
          </a>
        </div>

        <button
          type="button"
          className="bg-transparent"
          onClick={() => {
            const target = document.querySelector("section#sobre-mi");
            if (target) {
              const y = target.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({ top: y - 100, behavior: "smooth" });
            }
          }}
        >
          <div className="scroll-down"></div>
        </button>
      </div>
    </section>
  </div>
);

export default Content;
