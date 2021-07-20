import {
  faEnvelope,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-5">
          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left">
              <input
                type="text"
                className="input is-dark"
                placeholder="Please enter your name"
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
              ></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-danger">
                <span className="icon">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </span>
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
