import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Sample from "./components/other/sample";
import Dashboard from "./components/Home/Dashborad";
import Landing from "./components/Home/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route exact path="/" component={Landing} />
      </div>
      <div className="">
        <Route exact path="/sample" component={Sample} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
