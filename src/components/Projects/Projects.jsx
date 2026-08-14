import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'CUSTOM SHAFT',
      subtitle: 'PRECISION MACHINING',
      image: '/10_turned_shaft_component.png',
      align: 'left'
    },
    {
      title: 'INDUSTRIAL FRAME',
      subtitle: 'CUSTOM FABRICATION',
      image: '/04_grinding_fabrication.png',
      align: 'right'
    }
  ];

  return (
    <section className="projects-section bg-black section-padding" id="projects">
      <div className="container">
        <h4 className="section-subtitle">SELECTED WORK</h4>
        <h2 className="massive-section-title">PROJECTS</h2>
      </div>

      <div className="projects-gallery">
        {projects.map((project, index) => (
          <motion.div 
            className={`project-item align-${project.align}`} 
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
