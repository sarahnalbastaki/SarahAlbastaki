import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Projects from "../src/pages/Projects";
import ForYou from "../src/pages/Foryou";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/foryou" element={<ForYou />} />
      </Routes>
    </Router>
  );
};

export default App;
