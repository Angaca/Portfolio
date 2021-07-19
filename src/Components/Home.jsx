import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="ml-3">
      <p className="title is-size-1 is-spaced">Hi, I'm Andrea.</p>
      <p className="subtitle is-size-3">Junior Full Stack Developer</p>
      <p className="is-size-6 mt-3">Trained at Nortchoders</p>
      <Link to="/About">
        <p className="has-text-weight-medium is-waring mt-3 has-text-danger">
          Find out more {">"}
        </p>
      </Link>
    </div>
  );
};

export default Home;
