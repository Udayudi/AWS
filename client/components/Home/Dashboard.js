import React, { Component } from "react";
import Sidebar from "../Home/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmpAdd from "../HRD/EmpAdd";
import Sample from "../other/sample";

import "../../App.css";
class Dashboard extends Component {
  render() {
    return (
      <Router>
        <Sidebar />
        <div className="main-div">
          <Route exact path="/sample" component={Sample} />
          <Route exact path="/empadd" component={EmpAdd} />
        </div>
      </Router>
    );
  }
}
export default Dashboard;
