import React, { useState } from "react";
import { render } from "react-dom";

// Main App component
// gets details from Github and displays them on the page

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: ""
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/userz/luisgregson");
    const { fullName } = await response.json();

    this.setState({
      fullName
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.fullName}' GitHub page</h1>
        <p>Name: {this.state.fullName}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
