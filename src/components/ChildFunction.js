function ChildFunction(props) {
  let { name, age, classRoom, score } = props.objStudent;
  var renderScore = () => {
    return score.map((score, index) => {
      return <p key={index}>student score: {score}</p>;
    });
  };
  var renderArray = () => {
    return props.arrayNum.map((arr, index) => {
      return <p key={index}>number:{arr}</p>;
    });
  };
  return (
    <div>
      <h1>child function component. Hello {props.name}</h1>
      <p>student name: {name}</p>
      <p>student age: {age}</p>
      <p>student class: {classRoom}</p>
      {renderScore()}
      {renderArray()}
      <button
        onClick={() => {
          props.alertFn(classRoom);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default ChildFunction;
