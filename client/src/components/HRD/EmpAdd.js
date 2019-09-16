import React, { Component } from "react";

class EmpAdd extends Component {
  render() {
    return (
      <div className="main-div">
        <div className="container">
          <h4>Personal Details</h4>
          <hr />
          <form>
            <div className="form-group col-md-3  input-group-sm mb-3">
              <label className="label-t" for="inputEmail4">
                Employee ID
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Employee ID"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-3  input-group-sm mb-3">
                <label className="label-t" for="inputEmail4">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-3 input-group-sm mb-3">
                <label className="label-t" for="inputPassword4">
                  Midle Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Midle Name"
                />
              </div>
              <div className="form-group col-md-3 input-group-sm mb-3">
                <label className="label-t" for="inputPassword4">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2  input-group-sm mb-3">
                <label className="label-t" for="inputEmail4">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group col-md-3 input-group-sm mb-3">
                <label className="label-t" for="inputPassword4">
                  E-Mail ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="E-Mail ID"
                />
              </div>
              <div className="form-group col-md-2 input-group-sm mb-3">
                <label className="label-t" for="inputPassword4">
                  Alt Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Alt Phone Number"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-3  input-group-sm mb-3">
                <label className="label-t" for="inputEmail4">
                  PAN Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="PAN Number"
                />
              </div>
              <div className="form-group col-md-3  input-group-sm mb-3">
                <label className="label-t" for="inputEmail4">
                  Aadhar Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Aadhar Number"
                />
              </div>
              <div className="form-group col-md-3  input-group-sm mb-3">
                <label className="label-t" for="inputEmail4">
                  Driving Licence
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Driving Licence"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="from-group col-md-3 input-group-sm mb-3">
                <label className="label-t">Blood Group</label>
                <select id="inputCity" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="from-group col-md-3 input-group-sm mb-3">
                <label className="label-t">Height</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Height"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="from-group col-md-3 input-group-sm mb-3">
                <label className="label-t" for="inputEmail4">
                  Current Address
                </label>
                <textarea
                  className="form-control "
                  aria-label="With textarea"
                />
              </div>
              <div className="form-group col-md-2 input-group-sm mb-3">
                <label for="inputState">City</label>
                <select id="inputCity" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2 input-group-sm mb-3">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2 input-group-sm mb-3">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>

            <div className="form-row">
              <div className="from-group col-md-3 input-group-sm mb-3">
                <label className="label-t" for="inputEmail4">
                  Permanent Address
                </label>
                <textarea className="form-control" aria-label="With textarea" />
              </div>
              <div className="form-group col-md-2 input-group-sm mb-3">
                <label for="inputState">City</label>
                <select id="inputCity" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2 input-group-sm mb-3">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2 input-group-sm mb-3">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Single
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Married
                </label>
              </div>
            </div>
            {/*  */}
            <hr />
            <h4>Official Details</h4>
            <hr />
            <div className="form-row">
              <div className="form-group col-md-3  input-group-sm mb-3">
                <label className="label-t" for="inputEmail4">
                  Employee ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Employee ID"
                />
              </div>
              <div className="form-group col-md-3  input-group-sm mb-3">
                <label className="label-t" for="inputEmail4">
                  Department
                </label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-3  input-group-sm mb-3">
                <label className="label-t" for="inputEmail4">
                  Reporting To
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Reporting To"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              No Action
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default EmpAdd;
