import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Digital Content Creation",
      desc: "Producing content and creating digital marketing materials",
      icon: "fas fa-palette",
    },
    {
      name: "Multimedia Presentations",
      desc: "Integrating video, audio, and graphical elements to produce interactive presentations.",
      icon: "fas fa-chart-area",
    },
    {
      name: "Digital Asset Management",
      desc: "Organizing and maintaining digital files. Cataloging and archiving media assets.",
      icon: "fas fa-laptop-house",
    },
    {
      name: "Brand Development",
      desc: "Crafting brand narratives and messaging. Developing brand guidelines and style guides.",
      icon: "fas fa-bullhorn",
    },
    {
      name: "Video Editing",
      desc: "Adding special effects and transitions, color grading, video correction and much more.",
      icon: "fas fa-desktop",
    },
    {
      name: "Graphic Design",
      desc: "Creating layouts for print and digital media. Photo editing and manipulation.",
      icon: "fas fa-paint-brush",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
