import React, { useRef } from "react";

const Grado = () => {
  const gradosRef = useRef();
  const resultadoRef = useRef();
  const manejadorClick = () => {
    const gradosValor = gradosRef.current.value;
    const gradosFar = gradosValor * (9 / 5) + 32;
    resultadoRef.current.innerHTML = gradosFar;
  };
  return (
    <React.Fragment>
      <input ref={gradosRef} type="text" />
      <button onClick={manejadorClick}>Enviar</button>
      <div ref={resultadoRef}></div>
    </React.Fragment>
  );
};

export default Grado;
