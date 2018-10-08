import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";

import { Provider } from "./context";

import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Images from "./components/imagesFiles/Images";
import UploadForm from "./components/UploadForm/UploadForm";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="app">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/images" component={Images} />
              <Route exact path="/upload" component={UploadForm} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* <Footer /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
