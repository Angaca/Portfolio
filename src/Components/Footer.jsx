import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="hero-foot">
      <div className="mb-3">
        <span className="icon mx-3">
          <FontAwesomeIcon icon={faGithub} />
        </span>
        <span className="icon mx-3">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
        <span className="icon mx-3">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
