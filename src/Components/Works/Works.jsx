import React, { useState } from 'react';
import Titles from '../Titles/Titles';

import { UilGithubAlt } from '@iconscout/react-unicons';
import { UilEye } from '@iconscout/react-unicons';

import { projects } from './projects';

const Works = () => {
  const [filters, setFilters] = useState({
    html: true,
    css: true,
    js: true,
    react: true,
  });

  const handleCheck = (e) => {
    const { name } = e.target;
    setFilters({ ...filters, [name]: !filters[name] });
  };

  const filteredProjects = projects.filter((project) => {
    return project.technologies.some((tech) => filters[tech]);
  });

  return (
    <section
      id="works"
      className="works-section"
    >
      <div className="container works-container">
        <Titles
          first={'Works'}
          second={"Stuff I've built"}
        />

        {/* Filter */}
        <div className="works-filter">
          <h3>Filter:</h3>
          <label className={` label ${filters.html ? 'checked' : ''}`}>
            <input
              id="checkbox"
              type="checkbox"
              name="html"
              checked={filters.html}
              onChange={handleCheck}
            />
            HTML
          </label>
          <label className={`label ${filters.css ? 'checked' : ''}`}>
            <input
              type="checkbox"
              name="css"
              checked={filters.css}
              onChange={handleCheck}
            />
            CSS
          </label>
          <label className={`label ${filters.js ? 'checked' : ''}`}>
            <input
              type="checkbox"
              name="js"
              checked={filters.js}
              onChange={handleCheck}
            />
            JS
          </label>
          <label className={` label ${filters.react ? 'checked' : ''}`}>
            <input
              type="checkbox"
              name="react"
              checked={filters.react}
              onChange={handleCheck}
            />
            React
          </label>
        </div>

        {/* Result filter */}
        <div className="posts-container">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="post"
            >
              <img
                src={project.img}
                alt={`Image of ${project.title}`}
                className="post-img"
              />

              <div className="post-content">
                <div className="post-header">
                  <h4>{project.title}</h4>
                  <div className="post-icons-container">
                    <a
                      href={project.github}
                      target="_blank"
                    >
                      <UilGithubAlt className="post-icons" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                    >
                      <UilEye className="post-icons" />
                    </a>
                  </div>
                </div>

                <p
                  className="post-text"
                  dangerouslySetInnerHTML={{ __html: project.text }}
                />
                <div className="post-categories">
                  {project.technologies.map((tech) => (
                    <strong key={tech}>{tech.toUpperCase()} </strong>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
