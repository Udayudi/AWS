import React, { Component } from "react";
import img1 from "../../img/81688.jpg";
import img2 from "../../img/89367.jpg";

export default class Landing extends Component {
  render() {
    return (
      <div className="main">
        <div className="mark-left">
          <div className="jumbotraon">
            <h1 className="display-5">Welcome to WE-OCTA</h1>
            <p className="lead">This is a Demo Template | | | Art Work Area</p>
            <p className="lead" />
            <div className="text-center">
              <img
                src={img1}
                className="img-fluid"
                alt="Responsive image"
                width="200"
              />
              <img
                src={img2}
                className="img-fluid"
                alt="Responsive image"
                width="200"
              />
            </div>
            <hr className="my-2" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              placeat similique.{" "}
            </p>
            <p className="lead">
              <a
                className="btn btn-info btn-lg"
                href="/other/dash.html"
                role="button"
              >
                Click Here For Demo
              </a>
            </p>
          </div>
        </div>
        <div className="sign-in ">
          <form>
            <h4 className="text-center">OCTA | CRM</h4>
            <small className="text-muted">
              Employee Login Only. Have a Good Day
            </small>
            <div className="form-group input-group-sm ">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Username"
              />
              <small id="emailHelp" className="form-text text-muted">
                Never share your credentials with anyone else.
              </small>
            </div>
            <div className="form-group input-group-sm mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <a href="./Components/Dashboard/Dashboard.html" />
            <button type="submit" className="btn btn-info btn-sm btn-block">
              <i className="fas fa-sign-in-alt" /> Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
