import { Component } from "react";

export default class Child extends Component {
  render() {
    return <h1>Child component. helllo {this.props.name}</h1>;
  }
}
