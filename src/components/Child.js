import { Component } from "react";

export default class Child extends Component {
  renderScore = () => {
    return this.props.objStudent.score.map((score, index) => {
      return <p key={index}>student score: {score}</p>;
    });
  };
  renderArray = () => {
    return this.props.arrayNum.map((arr, index) => {
      return <p key={index}>number:{arr}</p>;
    });
  };
  render() {
    let { name, age, classRoom } = this.props.objStudent;
    return (
      <div>
        <h1>Child component. helllo {this.props.name}</h1>;<p>student name: {name}</p>
        <p>student age: {age}</p>
        <p>student class: {classRoom}</p>
        {this.renderScore()}
        {this.renderArray()}
        <button
          onClick={() => {
            this.props.alertFn(classRoom);
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
