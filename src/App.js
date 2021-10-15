import { HashRouter, Route } from "react-router-dom";
import './App.css';
import Projects from './components/portfolio';
import Wrapper from './components/Wrapper';
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <HashRouter basename="/">
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/portfolio" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
      <Footer />
    </div>
  </HashRouter>
  );
}

export default App;
