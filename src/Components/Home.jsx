import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="columns">
      <div className="column is-7">
        <p className="title">Hi, I'm Andrea.</p>
        <p className="subtitle mt-4">Junior Full Stack Developer</p>
        <p className="is-size-6 mt-3">Trained at Nortchoders</p>
        <Link to="/About">
          <p className="has-text-weight-medium is-waring mt-3 has-text-danger">
            Find out more {">"}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
