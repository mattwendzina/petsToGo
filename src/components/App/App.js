import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: {}
    };
  }
  render() {
    return <div className="App" />;
  }
}

export default App;
