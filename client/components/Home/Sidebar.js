import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/admin">
              <i className="fas fa-user-cog fa-lg" /> Admin
            </Link>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fas fa-address-card fa-lg" /> Customer Care
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fas fa-tools  fa-lg" /> Service
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fas fa-cart-arrow-down  fa-lg" /> Sales{" "}
            </a>
          </li>
          <li className="nav-item">
            <Link to="/empadd">
              <i className="fas fa-briefcase  fa-lg" /> HRMD
            </Link>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fas fa-mail-bulk  fa-lg" /> IMessage
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fas fa-file-alt  fa-lg" /> Reports
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Sidebar;
