import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
  {
    id: 2,
    image: IMG2,
    title: "Crypto Currency",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
  {
    id: 3,
    image: IMG3,
    title: "Crypto Currency",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
  {
    id: 4,
    image: IMG4,
    title: "Crypto Currency",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto Currency",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
  {
    id: 6,
    image: IMG6,
    title: "Crypto Currency",
    github: "https://github.com",
    demo: "https://dribbble.com/shots",
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>
                {" "}
                {/* This is a portofolio item title */}
                {title}
              </h3>
              <div className="portofolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        {/* <article className="portofolio__item">
          <div className="portofolio-item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        // </article>
        // <article className="portofolio__item">
        //   <div className="portofolio-item-image">
        //     <img src={IMG1} alt="" />
        //   </div>
        //   <h3>This is a portofolio item title</h3>
        //   <div className="portofolio__item-cta">
        //     <a href="https://github.com" className="btn" target="_blank">
        //       Github
        //     </a>
        //     <a
        //       href="https://dribbble.com/Alien_pixels"
        //       className="btn btn-primary"
        //       target="_blank"
        //     >
        //       Live Demo
        //     </a>
        //   </div>
        // </article>
        // <article className="portofolio__item">
        //   <div className="portofolio-item-image">
        //     <img src={IMG1} alt="" />
        //   </div>
        //   <h3>This is a portofolio item title</h3>
        //   <div className="portofolio__item-cta">
        //     <a href="https://github.com" className="btn" target="_blank">
        //       Github
        //     </a>
        //     <a
        //       href="https://dribbble.com/Alien_pixels"
        //       className="btn btn-primary"
        //       target="_blank"
        //     >
        //       Live Demo
        //     </a>
        //   </div>
        // </article>
        // <article className="portofolio__item">
        //   <div className="portofolio-item-image">
        //     <img src={IMG1} alt="" />
        //   </div>
        //   <h3>This is a portofolio item title</h3>
        //   <div className="portofolio__item-cta">
        //     <a href="https://github.com" className="btn" target="_blank">
        //       Github
        //     </a>
        //     <a
        //       href="https://dribbble.com/Alien_pixels"
        //       className="btn btn-primary"
        //       target="_blank"
        //     >
        //       Live Demo
        //     </a>
        //   </div>
        // </article>
        // <article className="portofolio__item">
        //   <div className="portofolio-item-image">
        //     <img src={IMG1} alt="" />
        //   </div>
        //   <h3>This is a portofolio item title</h3>
        //   <div className="portofolio__item-cta">
        //     <a href="https://github.com" className="btn" target="_blank">
        //       Github
        //     </a>
        //     <a
        //       href="https://dribbble.com/Alien_pixels"
        //       className="btn btn-primary"
        //       target="_blank"
        //     >
        //       Live Demo
        //     </a>
        //   </div>
        // </article> */}
      </div>
    </section>
  );
};

export default Portofolio;
