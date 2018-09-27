import React, { Component } from "react";
import "./login.css";
import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="filter">
          <div className="container py-5 ">
            <div className="col-md-8 offset-md-2 py-5 loginContainer">
              <div className="row">
                <div className="offset-md-3 col-md-6">
                  <h1 className="display-4 text-center text-light">Log In</h1>
                  <p className="lead text-center text-light">
                    Sign in to your Gallery account
                  </p>
                  <form>
                    <TextFieldGroup
                      placeholder="Email Address"
                      name="email"
                      type="email"
                    />
                    <TextFieldGroup
                      placeholder="Password"
                      name="password"
                      type="password"
                    />
                    <input
                      type="submit"
                      className="btn btn-info btn-block mt-4"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
