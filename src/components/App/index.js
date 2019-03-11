import React, { Component } from "react";
import "./App.css";
import CarouselUl from "../CarouselUl/index";
import Basket from "../Basket";
import Pets from "../../pets";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: Pets,
      basket: [
        {
          name: "Koala",
          description: `Small, cuddly and the world's best hugger!`,
          quantity: 2,
          price: 500
        },
        {
          name: "Leatherback Sea Turtle",
          description: `World's biggest turrrrttle!`,
          quantity: 1,
          price: 100000
        }
      ]
    };
  }

  increaseQuantity = index => {
    const increase = this.state.basket[index];
    this.setState(state => ({
      basket: [
        ...state.basket.slice(0, index),
        { ...increase, quantity: this.state.quantity + 1 },
        ...state.basket.slice(index + 1)
      ]
    }));
  };

  decreaseQuantity = index => {
    const increase = this.state.basket[index];
    this.setState(state => ({
      basket: [
        ...state.basket.slice(0, index),
        { ...increase, quantity: this.state.quantity - 1 },
        ...state.basket.slice(index + 1)
      ]
    }));
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
        <Basket
          basket={this.state.basket}
          onPlus={this.increaseQuantity}
          onMinus={this.decreaseQuantity}
        />
      </div>
    );
  }
}

export default App;
