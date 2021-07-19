import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="hero-foot">
      <nav className="tabs is-fullwidth">
        <div className="mb-3 ml-6">
          <span className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
