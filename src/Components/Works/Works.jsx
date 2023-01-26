import React, { useState } from 'react';
import Titles from '../Titles/Titles';

import { UilGithubAlt } from '@iconscout/react-unicons';
import { UilEye } from '@iconscout/react-unicons';

import img1 from '../../img/projects/README_HTML&CSS.gif';
import img2 from '../../img/projects/README_JSBASIC.gif';
import img3 from '../../img/projects/README_JSADV.gif';
import img4 from '../../img/projects/README_REACT.gif';
import img5 from '../../img/projects/README_FINALPROJECT1.gif';
import img6 from '../../img/projects/README_FINALPROJECT2.gif';
import img7 from '../../img/projects/prj5.png';
import img8 from '../../img/projects/prj7.png';
import img9 from '../../img/projects/quiz.gif';
import img10 from '../../img/projects/lyriks.png';
import img11 from '../../img/projects/ytclone.png';
import img12 from '../../img/projects/movie.gif';

import './works.css';

const projects = [
  {
    id: 1,
    title: 'Portfolio',
    github: 'https://github.com/Novecento201/Portfolio-Marco-Lovato',
    link: 'https://marcolovatopage.netlify.app/',
    text: 'Start2Impact Project. <br /> My first project ever. <br /> My first time working with technologies like <strong>HTML</strong>, <strong>CSS</strong>,<strong>JS</strong>.',
    img: img1,
    technologies: ['html', 'css', 'js'],
  },
  {
    id: 2,
    title: 'JS Counter',
    github: 'https://github.com/Novecento201/Counter',
    link: 'https://js-basic-s2i-marcolovato.netlify.app/',
    text: 'Start2Impact Project. <br /> A simple counter made entirely with <strong>JS</strong>. ',
    img: img2,
    technologies: ['html', 'css', 'js'],
  },
  {
    id: 3,
    title: 'Quality city life',
    github: 'https://github.com/Novecento201/Quality-life-city',
    link: 'https://quality-life-city.netlify.app/',
    text: 'Start2Impact Project. <br /> My first time using <strong>API</strong> and a bundler, <strong>Webpack 5 </strong>. <br/> A website for measure the quality of life in various cities.',
    img: img3,
    technologies: ['html', 'css', 'js'],
  },
  {
    id: 4,
    title: 'VegRecipes',
    github: 'https://github.com/Novecento201/VegRecipe',
    link: 'https://veg-recipes-novecento.netlify.app/',
    text: 'Start2Impact Project. <br /> My first time using <strong>React.js</strong> and <strong>Vite</strong>. <br /> A website to search for vegan recipes.',
    img: img4,
    technologies: ['react'],
  },
  {
    id: 5,
    title: 'Global Warming',
    github: 'https://github.com/Novecento201/Climate-Warming',
    link: 'https://climate-warming-novecento.netlify.app/',
    text: 'Start2Impact Project. <br /> My first time using <strong>Three.js</strong>, <strong>Styled Components</strong> and <strong>React Charts</strong>. <br/> A website to check global warming data. ',
    img: img5,
    technologies: ['react'],
  },
  {
    id: 6,
    title: 'Covid-19 Tracker',
    github: 'https://github.com/Novecento201/covid19-tracker',
    link: 'https://covid19-tracker-novecento.netlify.app',
    text: 'Start2Impact Project. <br /> Latest project to get certificate start2impact frontend path. <br /> A website to check covid 19 data.',
    img: img6,
    technologies: ['react'],
  },
  {
    id: 7,
    title: 'Meme generator',
    github: 'https://github.com/Novecento201/project-5-Scrimba-React-Basic',
    link: 'https://meme-generetor-scrimba.netlify.app/',
    text: 'Scrimba Project. <br /> Meme generator built with <strong>React</strong>. ',
    img: img7,
    technologies: ['react'],
  },
  {
    id: 8,
    title: 'Tenzies',
    github: 'https://github.com/Novecento201/project-7-Scrimba-React-Basic',
    link: 'https://tenzeis-game-scrimba.netlify.app/',
    text: 'Scrimba Project. <br /> Tenzies made with <strong>React</strong> ',
    img: img8,
    technologies: ['react'],
  },
  {
    id: 9,
    title: 'Quiz',
    github: 'https://github.com/Novecento201/Quiz-Scrimba-React',
    link: 'https://quiz-novecento.netlify.app',
    text: 'Scrimba Project. <br /> Quizz app built with <strong>React</strong>, as scrimba latest project. ',
    img: img9,
    technologies: ['react'],
  },
  {
    id: 10,
    title: 'Lyrics',
    github: 'https://github.com/Novecento201/lyriks-YT-Clone',
    link: 'https://novecento-lyriks-app.netlify.app/',
    text: 'Video YT Tutorial. <br /> A "clone" site of Spotify. <br/> Made thanks to this <a href="https://www.youtube.com/watch?v=I1cpb0tYV74&list=WL" target="_blank"></a> video ',
    img: img10,
    technologies: ['react'],
  },
  {
    id: 11,
    title: 'Youtube Clone',
    github: 'https://github.com/Novecento201/youtube-clone-YT-Clone',
    link: 'https://youtube-clone-novecento.netlify.app/',
    text: 'Video YT Tutorial. <br /> A "clone" site of youtube. <br/> Made thanks to this <a href="https://www.youtube.com/watch?v=FHTbsZEJspU&t=4094s" target="_blank"></a> video ',
    img: img11,
    technologies: ['react'],
  },
  {
    id: 12,
    title: 'Movies',
    github: 'https://github.com/Novecento201/movie',
    link: 'https://quiz-novecento.netlify.app/',
    text: 'Site created to test my skills with <strong>React</strong>, the site is not responsive!',
    img: img12,
    technologies: ['react'],
  },
];

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
    <section id="works" className="works-section">
      <div className="container works-container">
        <Titles first={'Works'} second={"Stuff I've built"} />

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
            <div key={project.id} className="post">
              <img
                src={project.img}
                alt={`Image of ${project.title}`}
                className="post-img"
              />

              <div className="post-content">
                <div className="post-header">
                  <h4>{project.title}</h4>
                  <div className="post-icons-container">
                    <a href={project.github} target="_blank">
                      <UilGithubAlt className="post-icons" />
                    </a>
                    <a href={project.link} target="_blank">
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
