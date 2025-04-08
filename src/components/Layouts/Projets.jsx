import React from "react";

const Projects = ({ projets }) => {
  return (
    <section id="projets" className="projects">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projets?.map((projet) => (
          <div className="project-item" key={projet?.id}>
            <div>
              <p>{projet?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
