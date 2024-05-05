import { Component } from "react";
import Child from "./Child";
import ChildFunction from "./ChildFunction";

export default class Parent extends Component {
  name = "binhdev";
  render() {
    return (
      <div>
        <Child name={this.name} />
        <ChildFunction name={this.name} />
      </div>
    );
  }
}
