import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="columns">
      <div className="column is-7">
        <p className="is-size-3 mb-3 has-text-weight-semibold">
          My name is Andrea Catania and I am a Junior Full Stack Developer.
        </p>
        <p className="is-size-4 has-text-weight-semibold">
          I am an Italian guy living in the UK. Passion and aspiration made me
          change my career completely, from management to coding.
        </p>
        <p className="is-size-4 has-text-weight-semibold">
          For the past few months I have studied the most cutting edges
          Javascript technologies and tools in the Northcoders Bootcamp;
          designing and practicing in a large variety of subjects.
        </p>
        <p className="is-size-5 mt-3 has-text-weight-semibold">
          Please have a look to my{" "}
          <span className="has-text-danger has-text-weight-semibold">
            <Link to="/Projects">work.</Link>
          </span>
        </p>
        <p className="is-size-5 mt-3 has-text-weight-semibold">
          If you want to get in touch,{" "}
          <span className="has-text-danger has-text-weight-semibold">
            <Link to="/Contact">Contact me!</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
