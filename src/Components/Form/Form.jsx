import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './form.css';

const Form = () => {
  const form = useRef();

  const notifySuccess = () =>
    toast('The message has been successfully sent', {
      className: 'sent',
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
    });

  const notifyError = () =>
    toast('The message has not been sent', {
      className: 'sent',
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_ID_EMAILJS,
        import.meta.env.VITE_TEMPLATE_EMAILJS,
        form.current,
        import.meta.env.VITE_API_KEY_EMAILJS
      )
      .then(
        (result) => {
          console.log(result.text);
          notifySuccess();
        },
        (error) => {
          console.log(error.text);
          notifyError();
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <div className="form-div">
        <input
          type="text"
          name="user_name"
          className="form-input"
          placeholder=" "
          required
        />
        <label className="form-label">Name</label>
      </div>

      <div className="form-div">
        <input
          type="email"
          name="user_email"
          className="form-input"
          placeholder=" "
          required
        />
        <label className="form-label">Email</label>
      </div>

      <div className="form-div">
        <textarea
          autoComplete="nope"
          autoCorrect="off"
          name="message"
          className="form-input  textarea-contact "
          placeholder=" "
          required
        ></textarea>
        <label className="form-label">Message</label>
      </div>

      <input type="submit" value="Send" className="form-button" />
    </form>
  );
};

export default Form;
