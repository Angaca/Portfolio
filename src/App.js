import "./App.sass";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <section className="hero is-black is-large is-fullheight">
        <Navbar />
        <div className="hero-body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Projects">
              <Projects />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default App;
