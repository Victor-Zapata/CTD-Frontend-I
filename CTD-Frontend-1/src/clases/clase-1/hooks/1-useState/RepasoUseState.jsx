import React, { useState } from "react";

const RepasoUseState = () => {
  const [ count, setCount ] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1 )
  };

  const handleDecrement = () => {
    if(count > 0)
    setCount(count - 1 )
  };

  return (
    <>
      <h2 style={{ margin: "2rem auto" }}>RepasoUseState</h2>
      <h3>Counter: {count} </h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
};

export default RepasoUseState;
