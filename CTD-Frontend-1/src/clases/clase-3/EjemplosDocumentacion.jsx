import React, { useState } from "react";

const EjemplosDocumentacion = () => {

  //DOCU en el código con JSDoc
  /**
   * función que calcula la suma de dos números
   * @author Victor Zapata
   * @param {number} a El primer número
   * @param {number} b El segundo número
   * @returns {number} La suma de a y b
   */

  function sumar (a, b) {
    return a + b;
  }

  const [counter, setCounter] = useState(0);
  const [numeroSuma, setNumeroSuma] = useState(0)

  //función manejadora de la suma
  /**
   * @author Gabriel Gesta 
   * @description Devuelve el estado actual + 1
   */
  const handleIncrement = () => {
    setCounter(counter + 1)
  };

  //OTRO EJEMPLO
  /**
   * función que suma el estado actual + un número que le envía el usuario
   * @author Ornella Novino
   * @param {number} numSum El número que tipea el user y quiero sumar
   * @example () => handleSum (numSum)
   * @see https://google.com/
   */
  const handleSum = (numSum) => {
    setCounter(counter + Number(numSum))
  };

  /**
   * función manejadora del número que debo sumar
   * @author Paulo Pintos 
   * @description Agarra el número que el user tipea y lo coloca en un estado
   * @see https://www.digitalhouse.com/ar
   */
  const handleValueSuma = (e) => {
    setNumeroSuma(e.target.value)
  };

  return (
    <>
      <h2 style={{ marginBottom: "5rem" }}>Ejemplos Documentación</h2>

      <input type="number" placeholder="agrega un número" onChange={handleValueSuma} />
      <button onClick={() => handleSum (numeroSuma)}>+</button>
      <h3 style={{marginBottom: '15rem'}}>Resultado: {counter}</h3>
    </>
  );
};

export default EjemplosDocumentacion;
