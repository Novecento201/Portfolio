import { useEffect, useState } from 'react';
import Logo from '../../img/Logo.svg';
import {
  BsFillSunFill,
  BsMoonFill,
  BsPerson,
  BsChatLeft,
} from 'react-icons/bs';
import { RiAppsLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { SlBriefcase } from 'react-icons/sl';
import { AiOutlineHome } from 'react-icons/ai';

import './header.css';

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinksMobile = (
    <div className="nav-links-mobile">
      <a
        href="#home"
        onClick={() => setIsNavOpen(false)}
      >
        <AiOutlineHome className="navbar-icon" />
        Home
      </a>
      <a
        href="#about"
        onClick={() => setIsNavOpen(false)}
      >
        <BsPerson className="navbar-icon" />
        About
      </a>
      <a
        href="#works"
        onClick={() => setIsNavOpen(false)}
      >
        <SlBriefcase className="navbar-icon" />
        Works
      </a>
      <a
        href="#contact"
        onClick={() => setIsNavOpen(false)}
      >
        <BsChatLeft className="navbar-icon" />
        Contact
      </a>
    </div>
  );

  function changeTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  function toggleNav() {
    setIsNavOpen((open) => !open);
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      {isNavOpen && navLinksMobile}
      <nav className=" nav-container">
        <a href="https://marcolovato-portfolio.netlify.app/">
          <img
            src={Logo}
            alt="Logo"
            className="header-logo"
          />
        </a>

        <div className="nav-links">
          <a href="#home">
            <AiOutlineHome className="navbar-icon" />
            Home
          </a>
          <a href="#about">
            <BsPerson className="navbar-icon" />
            About
          </a>
          <a href="#works">
            <SlBriefcase className="navbar-icon" />
            Works
          </a>
          <a href="#contact">
            <BsChatLeft className="navbar-icon" />
            Contact
          </a>
        </div>

        <div className="nav-btns">
          <button onClick={changeTheme}>
            {theme === 'light' ? (
              <BsFillSunFill className="header-icon" />
            ) : (
              <BsMoonFill className="header-icon" />
            )}
          </button>

          <button onClick={toggleNav}>
            {isNavOpen ? (
              <AiOutlineClose className="header-icon" />
            ) : (
              <RiAppsLine className="header-icon" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
