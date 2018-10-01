import React, { Component } from "react";
import "./images.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import background from "../../img/background.jpg";
class Images extends Component {
  state = {
    arr: [1, 2, 3, 4, 5, 6, 7, 8]
  };
  render() {
    const item = this.state.arr;

    return (
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3, 1100: 4 }}
      >
        <Masonry columnsCount={4} gutter="10px">
          {item.map(i => (
            <article className="card" key={i}>
              <img
                src={background}
                style={{ width: "100%", display: "block" }}
                alt="login image"
              />
              <div className="card-footer">
                <h3 className="card-title">Background image</h3>
                <p className="card-description">
                  This is a simple and very beautiful background image. And it
                  looks more nice in the background and the beauty will increase
                  of the app.
                </p>
              </div>
            </article>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    );
  }
}

export default Images;
