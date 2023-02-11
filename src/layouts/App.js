import "../styles/App.css";
import React from "react";

import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
