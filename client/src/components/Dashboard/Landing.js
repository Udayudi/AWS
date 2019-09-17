import React, { Component } from "react";
import axios from "axios";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefualt();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    axios.post("/api/users/login".user).then(res => console.log(res.data));
  }
  render() {
    return (
      <div className="signin">
        <form onSubmit={this.onSubmit}>
          <h4 className="login-head">Login</h4>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              You never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-sm btn-block">
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Landing;
