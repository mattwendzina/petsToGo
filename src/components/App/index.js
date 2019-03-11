import React, { Component } from "react";
import "./App.css";
import CarouselUl from "../CarouselUl/index";
import Pets from "../../pets";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: Pets,
      quantity: 0
    };
  }

  render() {
    return (
      <div className="App">
        <CarouselUl pets={this.state.pets} />
      </div>
    );
  }
}

export default App;
