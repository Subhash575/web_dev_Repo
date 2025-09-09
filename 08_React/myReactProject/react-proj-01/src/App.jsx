import { useState, useEffect } from "react";
//useEffect, dependency array, cleanup
function App() {
  const [count1, setCnt1] = useState(0);
  const [count2, setCnt2] = useState(0);

  function increase() {
    setCnt1((cnt) => cnt + 1);
  }

  function decrease() {
    setCnt2((cnt) => cnt - 1);
  }

  return (
    <>
      <Counter count1={count1} count2={count2}></Counter>{" "}
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  );
}

function Counter(props) {
  //We can use multiple useEffect in the react

  //1. Here no dependency array.
  // It generally use in case of mounting and unmounting
  useEffect(function () {
    console.log("mount");
  }, []);

  //2. Here dependency array is present.
  // We can add multiple dependency array here.

  // useEffect(function(){

  // }, [props.count1, props.count2]);

  // or

  useEffect(() => {
    console.log("count has changed");

    return function () {
      console.log("cleanup run");
    };
  }, [props.count1]);

  return (
    <div>
      <h1>count1 :{props.count1}</h1>
      <h1>count2 :{props.count2}</h1>
    </div>
  );
}

export default App;
