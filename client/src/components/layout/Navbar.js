import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          OCTA | CRM
        </Link>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                {" "}
                <i className="fas fa-external-link-alt" /> Click Here to See all
                Pages
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-info-circle" /> Info
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-users" /> Team
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {" "}
                <i className="fas fa-sign-in-alt" /> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
