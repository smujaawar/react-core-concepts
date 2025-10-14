import { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Hello from class component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default ClassCounter;
