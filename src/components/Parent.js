import { Component } from "react";
import Child from "./Child";
import ChildFunction from "./ChildFunction";

export default class Parent extends Component {
  student = {
    id: 1,
    name: "binhdev",
    age: 25,
    classRoom: "reactjs",
    score: [90, 75, 80],
  };

  arrayNum = [66, 55, 44];

  alertFn = (text) => {
    alert(text);
  };

  render() {
    return (
      <div>
        <Child alertFn={this.alertFn} arrayNum={this.arrayNum} name={this.name} objStudent={this.student} />
        <ChildFunction alertFn={this.alertFn} arrayNum={this.arrayNum} name={this.name} objStudent={this.student} />
      </div>
    );
  }
}
