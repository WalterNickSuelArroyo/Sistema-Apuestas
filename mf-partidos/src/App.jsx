import React from "react";
import ReactDOM from "react-dom";
import Navbar from 'components/Navbar'

import "./index.css";
import MatchCard from "./components/MatchCard";

const App = () => (
  <div className="main-content">
    <Navbar />
    <MatchCard />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));


