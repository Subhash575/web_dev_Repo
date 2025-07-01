import { useState, useEffect } from "react";
function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const visible = Math.random() < 0.5 ? true : false;
  const [count, setCount] = useState(0);
  console.log("counter");
  // guard our setInterval from rerender.
  useEffect(function () {
    setInterval(function () {
      setCount(function (count) {
        return visible ? count + 5 : count - 50;
      });
    }, 1000);
    console.log("mounted");
  }, []);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

export default App;
