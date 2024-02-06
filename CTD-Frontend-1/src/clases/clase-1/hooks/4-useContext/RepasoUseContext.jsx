import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const RepasoUseContext = () => {
  //ahora vamos a pintar la información que queremos consumir de ese Provider
  // const algo = useContext (UserContext);
  // console.log(algo);

  const { hola, alumna } = useContext(UserContext);

  return (
    <>
      <h2>RepasoUseContext</h2>
      <h3>{hola}</h3>
      <span>{alumna.nombre}</span>
    </>
  );
};

export default RepasoUseContext;
