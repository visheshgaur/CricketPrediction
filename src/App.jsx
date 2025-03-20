import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./style.css"
import Predictions from "./components/Predictions";
import Home from "./components/Home";
import About from "./components/About";



const App = () => {
  return (
    <Router>
      <header>
        <h1>Cricket Prediction</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/predictions">Predictions</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <p>2025 Cricket Prediction. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
