import { useState } from 'react';

import Titles from '../Titles/Titles';
import Profilo from '../../img/Profilo2.png';
import Habitat from '../../img/habitat.jpeg';

import { BsPersonCircle } from 'react-icons/bs';
import { TbSchool } from 'react-icons/tb';
import { SlRocket } from 'react-icons/sl';

import { UilHeadSide } from '@iconscout/react-unicons';
import { UilBracketsCurly } from '@iconscout/react-unicons';
import { UilConstructor } from '@iconscout/react-unicons';
import { UilAngleDown } from '@iconscout/react-unicons';
import { UilCalendarAlt } from '@iconscout/react-unicons';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { EffectCards, Pagination } from 'swiper';

import './about.css';

const About = () => {
  const [modals, setModals] = useState([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
  ]);

  const handleOpenModal = (id) => {
    setModals((prevModals) =>
      prevModals.map((modal) => {
        if (modal.id === id) {
          return { ...modal, isOpen: true };
        }
        return modal;
      })
    );
  };

  const handleCloseModal = (id) => {
    setModals((prevModals) =>
      prevModals.map((modal) => {
        if (modal.id === id) {
          return { ...modal, isOpen: false };
        }
        return modal;
      })
    );
  };

  function handleOpenSkills(index) {
    const skillsContent = document.getElementsByClassName('skills-content');
    for (let i = 0; i < skillsContent.length; i++) {
      if (i === index) {
        if (skillsContent[i].classList.contains('skills-open')) {
          skillsContent[i].classList.remove('skills-open');
          skillsContent[i].classList.add('skills-close');
        } else {
          skillsContent[i].classList.remove('skills-close');
          skillsContent[i].classList.add('skills-open');
        }
      } else {
        skillsContent[i].classList.remove('skills-open');
        skillsContent[i].classList.add('skills-close');
      }
    }
  }

  function handleModalClick(e) {
    let shouldCloseModal = true;
    if (e.target.closest('.modal-content')) {
      shouldCloseModal = false;
    }
    if (shouldCloseModal) {
      const newModals = modals.map((modal) => ({ ...modal, isOpen: false }));
      setModals(newModals);
    }
  }

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <Titles first={'About me'} second={'Who is Marco?'} />

        {/* Blob */}
        <div className="blob">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="about-blob"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: 'var(--first-color-lighter)' }}
                ></stop>
                <stop
                  offset="100%"
                  style={{ stopColor: 'var(--first-color)' }}
                ></stop>
              </linearGradient>

              <filter id="f1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
              </filter>
            </defs>

            <mask id="mask0" mask-type="alpha">
              <path
                fill="url(#gradient)"
                transform="translate(100 100)"
                filter="url(#f1)"
              >
                <animate
                  attributeName="d"
                  dur="7000ms"
                  repeatCount="indefinite"
                  values="
                    
                    M73,-21.6C82.7,6.1,70.4,43,46.4,59.4C22.4,75.7,-13.2,71.5,-38.3,53.1C-63.5,34.8,-78.1,2.3,-70,-23.2C-61.8,-48.7,-30.9,-67.3,0.4,-67.4C31.7,-67.5,63.3,-49.2,73,-21.6Z;

                    M68.6,-22.6C77.4,4.7,65,38.6,41.3,55.6C17.5,72.6,-17.7,72.7,-40.3,56.1C-62.9,39.5,-73,6.3,-64.2,-21C-55.3,-48.4,-27.7,-69.8,1.1,-70.1C29.9,-70.5,59.8,-49.8,68.6,-22.6Z;                

                    M73,-21.6C82.7,6.1,70.4,43,46.4,59.4C22.4,75.7,-13.2,71.5,-38.3,53.1C-63.5,34.8,-78.1,2.3,-70,-23.2C-61.8,-48.7,-30.9,-67.3,0.4,-67.4C31.7,-67.5,63.3,-49.2,73,-21.6Z;

                    "
                ></animate>
              </path>
            </mask>

            <g mask="url(#mask0)">
              <path
                fill="url(#gradient)"
                transform="translate(100 100)"
                filter="url(#f1)"
              >
                <animate
                  attributeName="d"
                  dur="7000ms"
                  repeatCount="indefinite"
                  values="
                
                    M73,-21.6C82.7,6.1,70.4,43,46.4,59.4C22.4,75.7,-13.2,71.5,-38.3,53.1C-63.5,34.8,-78.1,2.3,-70,-23.2C-61.8,-48.7,-30.9,-67.3,0.4,-67.4C31.7,-67.5,63.3,-49.2,73,-21.6Z;

                    M68.6,-22.6C77.4,4.7,65,38.6,41.3,55.6C17.5,72.6,-17.7,72.7,-40.3,56.1C-62.9,39.5,-73,6.3,-64.2,-21C-55.3,-48.4,-27.7,-69.8,1.1,-70.1C29.9,-70.5,59.8,-49.8,68.6,-22.6Z;

                    M73,-21.6C82.7,6.1,70.4,43,46.4,59.4C22.4,75.7,-13.2,71.5,-38.3,53.1C-63.5,34.8,-78.1,2.3,-70,-23.2C-61.8,-48.7,-30.9,-67.3,0.4,-67.4C31.7,-67.5,63.3,-49.2,73,-21.6Z;

                    "
                ></animate>
              </path>
              <image className="about-blob-img" x={40} y={25} href={Profilo} />
            </g>
          </svg>
        </div>

        {/* About text */}
        <div className="about-text">
          <h3>A creative web developer who loves to bring ideas to life </h3>

          <p>
            I'm just a knowledge hungry guy who loves to make things that live
            on internet.
          </p>
          <p>
            My interest in coding started in 2021, when I discovered that in
            this work, you can create anything you can think of from nothing, I
            fell in love with that.
          </p>
          <p>
            I'm happiest when I'm creating, learning, doing sport and thinking
            about how to make things better.
            <a onClick={() => handleOpenModal(1)} className="contact-link">
              More about me...
            </a>
          </p>
          <p>
            I have currently completed several study paths, such as
            <a
              href="https://drive.google.com/file/d/1vbsg-QjUdkIDRsIjo8zfuYfczjTVFDy7/view"
              target="_blank"
              className="contact-text-link"
            >
              Start2Impact
            </a>
            and
            <a
              href="https://drive.google.com/file/d/1EucGyVnPutYE-aGud1hIqFcRLi_BZ-uS/view"
              target="_blank"
              className="contact-text-link"
            >
              Scrimba
            </a>
            to improve my Frontend Developer skills.
          </p>
          <p>
            I'm available to start my first job as Frontend developer, feel free
            to reach out!
            <a href="#contact" className="contact-link">
              Get in touch!
            </a>
          </p>
        </div>

        {/* Swiper */}
        <div className="container-swiper">
          <Swiper
            effect={'cards'}
            pagination={{ clickable: true }}
            grabCursor={true}
            initialSlide={1}
            modules={[EffectCards, Pagination]}
            className="swiper mySwiper"
          >
            <SwiperSlide>
              <div className="box-information">
                <h3 className="box-name">About me</h3>
                <BsPersonCircle className="box-icon" />
                <button onClick={() => handleOpenModal(1)}>Open</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box-information">
                <h3 className="box-name">Skills</h3>
                <TbSchool className="box-icon" />
                <button onClick={() => handleOpenModal(2)}>Open</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box-information">
                <h3 className="box-name">Goals</h3>
                <SlRocket className="box-icon" />
                <button onClick={() => handleOpenModal(3)}>Open</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* MODAL ABOUT ME  */}
        <div
          className={`modal ${
            modals[0].isOpen ? 'display-block' : 'display-none'
          }`}
          onClick={(e) => handleModalClick(e)}
        >
          {/* Modal content  */}
          <div className="modal-content">
            <div className="modal-header">
              <h2>Biography</h2>
              <span className="close" onClick={() => handleCloseModal(1)}>
                ×
              </span>
            </div>

            <p className="modal-upgrade">Last update: 20/01/2023</p>

            <div className="modal-body-about">
              <div className="img-modal">
                <img src={Habitat} alt="Image of Marco using PC" />
              </div>

              <ul className="biography">
                <li>
                  <i>Name :</i> Marco
                </li>
                <li>
                  <i>Surname :</i> Lovato
                </li>
                <li>
                  <i>Born :</i> Italy 2001
                </li>
                <li>
                  <i>Nationality :</i> Italian
                </li>
                <li>
                  <i>Online name :</i> Novecento
                </li>
                <li>
                  <i>Personality :</i>{' '}
                  <a
                    href="https://www.16personalities.com/profiles/fdd6b24c5d3fb"
                    target="_blank"
                  >
                    {' '}
                    INTJ
                  </a>
                </li>
                <li>
                  <i>Superpower :</i> Grindset
                </li>
                <li>
                  <i>Hobby :</i> Training, reading (self-improvement books),
                  play online games (moba / mmorpg / fps).{' '}
                </li>
                <li>
                  <i>Interest :</i> Self improvement, money management, mma
                  fights, metaverse, coding stuff.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* MODAL SKILLS  */}
        <div
          className={`modal ${
            modals[1].isOpen ? 'display-block' : 'display-none'
          }`}
          onClick={(e) => handleModalClick(e)}
        >
          {/* Modal content  */}
          <div className="modal-content">
            <div className="modal-header">
              <h2>Skills</h2>
              <span className="close" onClick={() => handleCloseModal(2)}>
                ×
              </span>
            </div>

            <p className="modal-upgrade">Last update: 23/01/2023</p>

            <div className="modal-body-skills">
              <div className="skills-container">
                {/* SKILL 1  */}
                <div className="skills-content skills-open">
                  <div
                    className="skills-header"
                    onClick={() => handleOpenSkills(0)}
                  >
                    <UilHeadSide className="skills-icon" />
                    <div>
                      <h1 className="skills-title">Interpersonal</h1>
                    </div>
                    <UilAngleDown className="skills-arrow" />
                  </div>

                  <ul className="skills-list">
                    <li>Reliability</li>
                    <li>Effective communication</li>
                    <li>Open-mindedness</li>
                    <li>Problem-solving</li>
                    <li>Critical thinking</li>
                    <li>Organization</li>
                    <li>Optimizer</li>
                    <li>Willingness to learn</li>
                  </ul>
                </div>

                {/* SKILL 2  */}
                <div className="skills-content skills-close">
                  <div
                    className="skills-header"
                    onClick={() => handleOpenSkills(1)}
                  >
                    <UilBracketsCurly className="skills-icon" />

                    <div>
                      <h1 className="skills-title">Technical</h1>
                    </div>
                    <UilAngleDown className="skills-arrow" />
                  </div>

                  <div className="skills-list">
                    <h4 className="title-tool">Frontend Developer :</h4>

                    <div className="skills-list-list">
                      <div>
                        -Advanced:
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>Web Responsive</li>
                          <li>Javascript</li>
                        </ul>
                      </div>

                      <div>
                        -Intermediate:
                        <ul>
                          <li>React</li>
                        </ul>
                      </div>

                      <div>
                        -Novice:
                        <ul>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="skills-list">
                    <h4 className="title-tool">Developer Tools :</h4>

                    <div className="skills-list-list">
                      <div>
                        -Advanced:
                        <ul>
                          <li>VSCode</li>
                        </ul>
                      </div>

                      <div>
                        -Intermediate:
                        <ul>
                          <li>Git - GitHub</li>
                        </ul>
                      </div>

                      <div>
                        -Novice:
                        <ul>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="skills-list">
                    <h4 className="title-tool">Near future skills:</h4>

                    <div className="skills-list-list">
                      <div>
                        -Frontend:
                        <ul>
                          <li>TypeScript</li>
                          <li>Redux</li>
                        </ul>
                      </div>

                      <div>
                        -Backend:
                        <ul>
                          <li>Node.js</li>
                          <li>MongoDB</li>
                        </ul>
                      </div>

                      <div>
                        -Other:
                        <ul>
                          <li>Next.js</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SKILL 3  */}
                <div className="skills-content skills-close">
                  <div
                    className="skills-header"
                    onClick={() => handleOpenSkills(2)}
                  >
                    <UilConstructor className="skills-icon" />

                    <div>
                      <h1 className="skills-title">Work experience</h1>
                    </div>
                    <UilAngleDown className="skills-arrow" />
                  </div>

                  <div className="skills-list">
                    <div className="work-template">
                      <h3 className="qualification-title">Miller CNC</h3>
                      <span className="qualification-subtitle">MCN</span>

                      <div className="qualification-calendar">
                        <UilCalendarAlt />
                        09/2019 - 09/2022
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL GOALS  */}
        <div
          className={`modal ${
            modals[2].isOpen ? 'display-block' : 'display-none'
          }`}
          onClick={(e) => handleModalClick(e)}
        >
          {/* Modal content  */}
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={() => handleCloseModal(3)}>
                ×
              </span>
              <h2>Goals</h2>
            </div>

            <p className="modal-upgrade">Last update: 23/01/2023</p>

            <div className="modal-body">
              <p>I am currently studying to become a web developer.</p>
              <p>
                I'm aiming to become a <strong>full stack</strong> .
              </p>
              <p>
                Once that path is over, I'd like to take care of improving the{' '}
                <strong>performance</strong> , <strong>SEO </strong>and{' '}
                <strong>security</strong> of the sites.
              </p>
              <p>
                I really like the <strong>cybersecurity</strong> side so I'll
                specialize in that as well.
              </p>
              <p>
                Another topic that I would like to study and deepen are{' '}
                <strong>applications</strong> (android / OS).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
