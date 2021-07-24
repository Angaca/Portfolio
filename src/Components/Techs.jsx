import { faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Techs = () => {
  return (
    <div className="container">
      <p className="title is-size-4-mobile is-size-3-tablet is-left is-flex is-align-content-flex-start">
        Technologies I have used
      </p>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child card">
            <div className="card-header-title">JavaScript</div>
            <div className="card-content">
              <FontAwesomeIcon icon={faJs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techs;
