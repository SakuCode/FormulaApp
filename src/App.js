import React from "react";
import NavBar from "./components/Header/NavBar";
import Home from "./screens/Home.js";
import Schedule from "./screens/Schedule.js";
import Leaderboard from "./screens/Leaderboard.js";
import "./index.css";
import Footer from "./components/Footer/Footer.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
