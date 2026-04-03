import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { ButtomGet } from "../ButtomGet/ButtomGet";
import { homeFeaturedProjects } from "../../data/projects";

const imagePath = (fileName) => `${import.meta.env.BASE_URL}img/${fileName}`;

const FeaturedProjectsCarousel = () => (
  <section className="proyectos" id="proyectos">
    <h2 className="heading">
      <FormattedMessage id="projects" defaultMessage="Projects" />
    </h2>
    <div
      className="proyect-site"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <Swiper
        spaceBetween={30}
        loop
        grabCursor
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="proyectos-slider mySwiper"
      >
        {homeFeaturedProjects.map((project) => (
          <SwiperSlide className="caja" key={project.id}>
            <img src={imagePath(project.image)} alt="proyectos" />
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tecnologias">
                {project.technologies.map((technology, index) => (
                  <React.Fragment key={`${project.id}-${technology}`}>
                    {index > 0 && <span> -</span>}
                    {technology}
                  </React.Fragment>
                ))}
              </p>
              <a
                href={project.demoUrl}
                className="custom-btn btn"
                target="_blank"
                rel="noreferrer"
              >
                <span>Demo</span>
              </a>
              <a
                href={project.repoUrl}
                className="custom-btn btn-codigo"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
    <div className="portafolio-btn">
      <Link to="/project">
        <ButtomGet />
      </Link>
    </div>
  </section>
);

export default React.memo(FeaturedProjectsCarousel);
