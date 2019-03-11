import React, { Component } from "react";
import "./App.css";
import CarouselUl from "../CarouselUl/index";
import Pets from "../../pets";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: Pets,
      basket: []
    };
  }

  addToBasket = idx => {
    this.setState(state => ({
      basket: [{ name: "omar" }]
    }));
    console.log(this.state.basket);
  };

  render() {
    return (
      <div className="App">
        <h1> Pets to Go!</h1>
        <CarouselUl pets={this.state.pets} addToBasket={this.addToBasket} />
      </div>
    );
  }
}

export default App;
