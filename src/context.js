import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return {
        ...state,
        images: state.images.filter(image => image.id !== action.payload)
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    images: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
