import NCReviews from "../asset/NCReviews.png";
import ReviewsApi from "../asset/ReviewsApi.png";
import PokeCard from "../asset/PokeCard.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <p className="title">Some of my works</p>
        </div>
        <div className="column is-4"></div>
        <div className="column is-4 right">
          <p className="has-text-danger">
            <Link to="/Contact">Get in touch {">"}</Link>
          </p>
        </div>
      </div>
      <div className="columns is-vcentered is-multiline">
        <div className="column is-12 is-hidden">
          <div className="card">
            <header className="card-header">
              <div className="card-header-title is-centered is-size-4">
                <p>Team Project</p>
              </div>
            </header>
            <div className="card-content">
              <div className="columns is-vcentered">
                <div className="column is-6">
                  <figure className="image">
                    <img src={NCReviews} alt="Nc Reviews Webiste" />
                  </figure>
                </div>
                <div className="content">
                  NC Reviews is a sample website made with React and Bulma which
                  allows the users to consult, write, edit, vote and comment on
                  table games. It is the Front End side of a Full Stack project,
                  all the data are stored in the Games Review API.
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <a
                  href="https://nc-reviews.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  See it Online {">"}
                </a>
              </p>
              <p className="card-footer-item">
                {" "}
                <a
                  href="https://github.com/Angaca/FE-NC-Reviews"
                  target="_blank"
                  rel="noreferrer"
                >
                  See it on Github {">"}
                </a>
              </p>
            </footer>
          </div>
        </div>
        <div className="column is-12">
          <div className="card">
            <header className="card-header">
              <div className="card-header-title is-centered is-size-4">
                <p>NC Reviews</p>
              </div>
            </header>
            <div className="card-content">
              <div className="columns is-vcentered">
                <div className="column is-6">
                  <figure className="image">
                    <img src={NCReviews} alt="Nc Reviews Webiste" />
                  </figure>
                </div>
                <div className="content">
                  NC Reviews is a sample website made with React and Bulma which
                  allows the users to consult, write, edit, vote and comment on
                  table games. It is the Front End side of a Full Stack project,
                  all the data are stored in the Games Reviews API.
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <a
                  href="https://nc-reviews.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  See it Online {">"}
                </a>
              </p>
              <p className="card-footer-item">
                {" "}
                <a
                  href="https://github.com/Angaca/FE-NC-Reviews"
                  target="_blank"
                  rel="noreferrer"
                >
                  See it on Github {">"}
                </a>
              </p>
            </footer>
          </div>
        </div>
        <div className="column is-12">
          <div className="card">
            <header className="card-header">
              <div className="card-header-title is-centered is-size-4">
                <p>Games Reviews API</p>
              </div>
            </header>
            <div className="card-content">
              <div className="columns is-vcentered">
                <div className="column is-6">
                  <figure className="image">
                    <img src={ReviewsApi} alt="Nc Reviews Webiste" />
                  </figure>
                </div>
                <div className="content">
                  Games Reviews is an API build as Back End Part. Via Node,
                  Express and PostgreSQL it offers data and functionality to
                  store and manipulate table games reviews, comments and users
                  details.
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <a
                  href="https://nc-games-angaca.herokuapp.com/api"
                  target="_blank"
                  rel="noreferrer"
                >
                  See it Online {">"}
                </a>
              </p>
              <p className="card-footer-item">
                {" "}
                <a
                  href="https://github.com/Angaca/BE-NC-Reviews"
                  target="_blank"
                  rel="noreferrer"
                >
                  See it on Github {">"}
                </a>
              </p>
            </footer>
          </div>
        </div>
        <div className="column is-12">
          <div className="card">
            <header className="card-header">
              <div className="card-header-title is-centered is-size-4">
                <p>Pokédex Poké Card</p>
              </div>
            </header>
            <div className="card-content">
              <div className="columns is-vcentered">
                <div className="column is-6">
                  <figure className="image">
                    <img src={PokeCard} alt="Nc Reviews Webiste" />
                  </figure>
                </div>
                <div className="content">
                  Pokédex Poké Card is a fun experiment as my first React app
                  and vanilla CSS. The concept behind is to have a modern
                  Pokédex with a recognisable style inspired from the Pokémon
                  Trading Card Game cards.
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <a
                  href="https://pokedex-poke-cards.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  See it Online {">"}
                </a>
              </p>
              <p className="card-footer-item">
                {" "}
                <a
                  href="https://github.com/Angaca/Pokedex-Poke-Cards"
                  target="_blank"
                  rel="noreferrer"
                >
                  See it on Github {">"}
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
