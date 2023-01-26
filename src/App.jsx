import { useState } from "react";
import Component from "./component";

const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <>
      <Component />
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Somar</button>
    </>
  );
};

export default App;
