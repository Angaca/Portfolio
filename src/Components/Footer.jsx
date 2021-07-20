import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="hero-foot">
      <div className="mb-3">
        <a href="https://github.com/Angaca" target="_blank" rel="noreferrer">
          <span className="icon mx-3">
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/andreacatania/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon mx-3">
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </a>
        <a
          href="https://twitter.com/Angaca_VII"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon mx-3">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </a>
        <Link to="/Contact">
          <span className="icon mx-3">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
