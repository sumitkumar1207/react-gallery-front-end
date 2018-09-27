import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import "./register.css";

class Register extends Component {
  render() {
    return (
      <div className="register">
        <div className="filter">
          <div className="container py-3 ">
            <div className="col-md-8 offset-md-2 py-5 registerContainer">
              <div className="row">
                <div className="offset-md-3 col-md-6">
                  <h1 className="display-4 text-center text-light">Sign Up</h1>
                  <p className="lead text-center text-light">
                    Create your Gallery account
                  </p>
                  <form>
                    <TextFieldGroup placeholder="Name" name="name" />
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
                    <TextFieldGroup
                      placeholder="Confirm Password"
                      name="password2"
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

export default Register;
