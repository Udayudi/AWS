import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            OCTA CRM
          </Link>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Login <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
