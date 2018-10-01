import React, { Component } from "react";
import "./UploadForm.css";

class UploadForm extends Component {
  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <span className="modal-close">+</span>
          <div className="form-container">
            <div className="form-container-left">
              <h1 className="h1-title">Upload Your Image.</h1>
              <div className="form">
                <input
                  type="text"
                  name="title"
                  className="form-input title"
                  id="title"
                  placeholder="Title"
                />
                <textarea
                  name="description"
                  className="description"
                  id="description"
                  placeholder="Description"
                />

                <div className="button-container">
                  <div className="upload-btn-wrapper">
                    <button className="button">Select an Image</button>

                    <input
                      type="file"
                      multiple={false}
                      accept="image/*"
                      name="image"
                      className="upload-image"
                    />
                  </div>

                  <button className="button btn-submit">Upload</button>
                </div>
              </div>
            </div>
            <div className="form-container-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default UploadForm;