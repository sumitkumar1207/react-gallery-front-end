import React from "react";
import { Link } from "react-router-dom";

class Image extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="active-recipe">
          <img
            className="active-recipe__img"
            src={"./login.JPG"}
            alt="login image"
          />
          <h3 className="active-recipe__title">This is Image Title</h3>
          <h4 className="active-recipe__publisher">
            Publisher: <span>Sumit</span>
          </h4>
          <p className="active-recipe__website">
            Website:
            <span>
              <a href="https://www.facebook.com/sumityadav802">Know More</a>
            </span>
          </p>
          <button className="active-recipe__button">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Image;
