import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { portfolioData } from '../data';

const Projects = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      const tl = gsap
        .timeline({ paused: true, reversed: true })
        .to(headingRef.current, { scale: 1.1, duration: 1.5 });

      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => tl.reverse();

      headingRef.current.addEventListener('mouseenter', handleMouseEnter);
      headingRef.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (headingRef.current) {
          headingRef.current.removeEventListener('mouseenter', handleMouseEnter);
          headingRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }
  }, []);

  return (
    <>
      <h2 id="my_works" ref={headingRef}>
        EXAMPLES OF MY PRE-AI ERA WORKS
      </h2>
      <div className="cards_container" aria-label="Portfolio projects">
        {portfolioData.projects.map((project) => (
          <div key={project.title} className="card">
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="cover"
                  loading="lazy"
                />
              </div>
              <div className="card-back">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="white-link"
                >
                  VIEW PROJECT
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;


