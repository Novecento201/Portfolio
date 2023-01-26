import Form from '../Form/Form';
import Titles from '../Titles/Titles';
import { UilWhatsapp } from '@iconscout/react-unicons';
import { UilAt } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <Titles first={'Contact'} second={'Get in Touch'} />

        <div className="contact-text">
          I’m currently looking for a job as Frontend developer.
          <br />
          My inbox is always open, whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </div>

        <div className="contact-socials">
          <div className="contact-social">
            <UilWhatsapp className="contact-icon" />
            <div>
              <p className="social-title">Text me</p>
              <span className="social-subtitle">
                <a href="https://wa.me/+393292027244" target="_blank">
                  +39 329 202 7244
                </a>
              </span>
            </div>
          </div>

          <div className="contact-social">
            <UilAt className="contact-icon" />
            <div>
              <p className="social-title">Email</p>
              <span className="social-subtitle">
                <a href="mailto:marcolovatoword@gmail.com">marcolovatowork@</a>
              </span>
            </div>
          </div>

          <div className="contact-social">
            <UilLocationPoint className="contact-icon" />
            <div>
              <p className="social-title">Location</p>
              <span className="social-subtitle">
                <a
                  href="https://www.google.com/maps/place/36072+Chiampo,+Province+of+Vicenza/@45.5523709,11.2489756,13z/data=!3m1!4b1!4m5!3m4!1s0x477f4ee9b2abe449:0xb1d15342fcbf2ee!8m2!3d45.5457622!4d11.2774926"
                  target="_blank"
                >
                  Italy - Chiampo (VI)
                </a>
              </span>
            </div>
          </div>
        </div>

        <Form />
        <ToastContainer draggable={false} transition={Zoom} autoClose={4000} />
      </div>
    </section>
  );
};

export default Contact;
