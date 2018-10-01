import React, { Component } from "react";
import "./images.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import login from "./login.JPG";
class Images extends Component {
  render() {
    return (
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3, 1100: 4 }}
      >
        <Masonry columnsCount={4} gutter="10px">
          <article className="card">
            <img
              src={login}
              style={{ width: "100%", display: "block" }}
              alt="login image"
            />
            <div className="card-footer">
              <h3 className="card-title">Login image</h3>
              <p className="card-description">This is a description of image</p>
            </div>
          </article>
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}

export default Images;
