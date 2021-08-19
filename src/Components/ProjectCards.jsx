import NCReviews from "../asset/NCReviews.png";
import ReviewsApi from "../asset/ReviewsApi.png";
import PokeCard from "../asset/PokeCard.png";
import Melodia from "../asset/Melodia.png";
import { Link } from "react-router-dom";

const ProjectCards = () => {
  return (
    <div className="ProjectCards">
      <div className="columns">
        <div className="column is-5">
          <p className="title is-size-4-mobile is-size-3-tablet">
            Some of my works
          </p>
        </div>
        <div className="column is-4 is-hidden-touch"></div>
        <div className="column is-3 right">
          <p className="has-text-danger">
            <Link to="/Contact">Get in touch {">"}</Link>
          </p>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child card">
            <header className="card-header">
              <div className="card-header-title is-centered is-size-4-tablet is-size-5-mobile">
                <p>Melodia</p>
              </div>
            </header>
            <div className="card-content">
              <figure className="image">
                <img src={Melodia} alt="Melodia" />
              </figure>
              <div className="content is-size-5-tablet">
                Melodia is a fun mobile music guessing game to play in solo.
                Playing 10 round and getting as much points as possible. It uses
                Spotify API for the songs and it's built with React Native,
                Vanilla CSS, Lottie animations and some AWS services such as
                Dynamo DB with GraphQL.
              </div>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                {" "}
                <a
                  href="https://github.com/Angaca/Melodia"
                  target="_blank"
                  rel="noreferrer"
                >
                  See it on Github {">"}
                </a>
              </p>
            </footer>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child card">
            <header className="card-header">
              <div className="card-header-title is-centered is-size-4-tablet is-size-5-mobile">
                <p>NC Reviews</p>
              </div>
            </header>
            <div className="card-content">
              <figure className="image">
                <img src={NCReviews} alt="Nc Reviews Webiste" />
              </figure>
              <div className="content is-size-5-tablet">
                NC Reviews is a sample website made with React and Bulma which
                allows the users to consult, write, edit, vote and comment on
                table games. It is the Front End side of a Full Stack project,
                all the data are stored in the Games Reviews API.
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
        <div class="tile is-parent">
          <div class="tile is-child card">
            <header className="card-header">
              <div className="card-header-title is-centered is-size-4-tablet is-size-5-mobile">
                <p>Games Reviews API</p>
              </div>
            </header>
            <div className="card-content">
              <figure className="image">
                <img src={ReviewsApi} alt="Nc Reviews Webiste" />
              </figure>

              <div className="content is-size-5-tablet">
                Games Reviews is an API build as Back End Part. Via Node,
                Express and PostgreSQL it offers data and functionality to store
                and manipulate table games reviews, comments and users details.
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
        <div class="tile is-parent">
          <div class="tile is-child card">
            <header className="card-header">
              <div className="card-header-title is-centered is-size-4-tablet is-size-5-mobile">
                <p>Pokédex Poké Card</p>
              </div>
            </header>
            <div className="card-content">
              <figure className="image">
                <img src={PokeCard} alt="Nc Reviews Webiste" />
              </figure>
              <div className="content is-size-5-tablet">
                Pokédex Poké Card is a fun experiment as my first React app and
                vanilla CSS. The concept behind is to have a modern Pokédex with
                a recognisable style inspired from the Pokémon Trading Card Game
                cards.
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

export default ProjectCards;
