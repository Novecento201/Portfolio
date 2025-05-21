import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import SVGMarco from '../SVGMarco/SVGMarco';
import WordsCarousel from '../WordsCarousel/WordsCarousel';

import './home.css';

const Home = () => {
  return (
    <section
      id="home"
      className="home-section"
    >
      <div className="container home-container">
        <h2 className="home-title">Hi, I'm</h2>

        <SVGMarco />

        <h2 className="home-title">The web developer you are looking for.</h2>

        <WordsCarousel />

        <div className="home-socials">
          <a
            href="https://github.com/Novecento201"
            target="_blank"
          >
            <AiFillGithub className="home-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/marco-lovato-3816a3229/"
            target="_blank"
          >
            <AiFillLinkedin className="home-icon" />
          </a>
          <a
            href="https://discordapp.com/users/744882319717826620"
            target="_blank"
          >
            <SiDiscord className="home-icon" />
          </a>
        </div>

        <a
          className="home-button"
          href="#contact"
        >
          Contact me
        </a>
      </div>
    </section>
  );
};

export default Home;
