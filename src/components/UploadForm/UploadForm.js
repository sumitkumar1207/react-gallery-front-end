import React, { Component } from "react";
import { Consumer } from "../../context";
import "./UploadForm.css";

class UploadForm extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      title: "",
      description: "",
      image: "",
      errors: {},
      imageUrl: ""
    };

    this.closeModal = this.closeModal.bind(this);
  }
  onImageSelectClick = event => {
    // let file = event.srcElement.files[0];
    const reader = new FileReader();
    const thisObj = this;
    reader.onloadend = function() {
      thisObj.setState({
        imageUrl: reader.result
      });
    };

    // const file = this.refs.uploadImg.files[0];
    reader.readAsDataURL(event.target.files[0]);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.props.history.push("/");
  }

  render() {
    const { title, description, image, errors, imageUrl } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="modal-bg">
              <div className="modal">
                <span onClick={this.closeModal} className="modal-close">
                  +
                </span>

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
                        value={title}
                        onChange={this.onChange}
                        error={errors.title}
                      />
                      <textarea
                        name="description"
                        className="description"
                        id="description"
                        placeholder="Description"
                        value={description}
                        onChange={this.onChange}
                        error={errors.description}
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
                            // onChange={this.onChange}
                            onChange={this.onImageSelectClick.bind(this)}
                            refs="uploadImg"
                          />
                        </div>

                        <button
                          className="button btn-submit"
                          /// onClick={this.onImageSelectClick.bind(this, dispatch)}
                          type="submit"
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-container-right">
                    <img
                      className="preview-img"
                      src={this.state.imageUrl}
                      alt="placeholder"
                      id="output"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default UploadForm;
