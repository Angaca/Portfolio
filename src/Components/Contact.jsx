import {
  faEnvelope,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          event.target.reset();
          setSuccess(true);
        },
        (error) => {
          setFail(true);
        }
      );
  };

  return (
    <div className="container">
      <p className="title is-size-3-tablet is-size-4-mobile">
        Let's have a chat
      </p>
      <p className="subtitle is-size-5-tablet is-size-6-mobile">
        Fill the form below or send me an email at{" "}
        <a className="has-text-danger" href="mailto:andreacatania91@gmail.com">
          andreacatania91@gmail.com
        </a>
      </p>
      <div className="columns">
        <div className="column is-5">
          <form onSubmit={sendEmail}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className="input is-dark"
                  placeholder="Please enter your name"
                  name="user_name"
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className="input is-dark"
                  placeholder="Please enter your email"
                  name="email"
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Please enter your message"
                  rows="7"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-danger" type="submit" value="Send">
                  <span className="icon">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                  <span>Send</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="column is-3">
          {success ? (
            <article className="message is-danger mt-3">
              <div className="message-header">
                <p>Message sent, I will get back to you shortly</p>
                <button
                  className="delete"
                  onClick={() => setSuccess(false)}
                ></button>
              </div>
            </article>
          ) : null}
          {fail ? (
            <article className="message is-danger mt-3">
              <div className="message-header">
                <p>An error occurred, Please try again</p>
                <button
                  className="delete"
                  onClick={() => setFail(false)}
                ></button>
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Contact;
