import React, { useRef } from "react";

const RepasoUseRef = () => {
  let ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert("Hiciste clic " + ref.current + " veces");
  };

  return (
    <>
      <h2>RepasoUseRef</h2>
      <button onClick={handleClick}>Soy un Counter Clics...hazme clic!!</button>
    </>
  );
};

export default RepasoUseRef;
