import { useState } from "react";
import Component from "./component";

const App = () => {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("");
  return (
    <div className="container">
      <Component />
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Somar</button>
      <br />
      <input
        type="text"
        placeholder="digite seu nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <p>Meu nome é: {nome}</p>
    </div>
  );
};

export default App;
