import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';

import './footer.css';

const Footer = () => {
  return (
    <footer className=" footer-container footer">
      {/* <!-- WAVES SVG --> */}
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="var(--first-color)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="var(--first-color)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="var(--first-color)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill="var(--first-color)"
          />
        </g>
      </svg>

      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://github.com/Novecento201" target="_blank">
            <AiFillGithub className="icon-footer" />
          </a>

          <a
            href="https://www.linkedin.com/in/marco-lovato-3816a3229/"
            target="_blank"
          >
            <AiFillLinkedin className="icon-footer" />
          </a>

          <a
            href="https://discordapp.com/users/744882319717826620"
            target="_blank"
          >
            <SiDiscord className="icon-footer" />
          </a>
        </div>
        <p className="text-copy">
          &copy; 2022 | Designed and coded by Marco Lovato
        </p>
      </div>
    </footer>
  );
};

export default Footer;
