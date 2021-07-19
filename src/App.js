import "./App.sass";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <section class="hero is-dark is-large is-fullheight">
        <Navbar />
        <div class="hero-body">
          <Home />
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default App;
