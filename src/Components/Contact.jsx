import {
  faEnvelope,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import key from "../emailJSKey";

const Contact = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(key.SERVICE_ID, key.TEMPLATE_ID, event.target, key.USER_ID)
      .then(
        (result) => {
          event.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <p className="title">Let's have a chat</p>
      <p className="subtitle">
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
            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea
                  class="textarea"
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
      </div>
    </div>
  );
};

export default Contact;
