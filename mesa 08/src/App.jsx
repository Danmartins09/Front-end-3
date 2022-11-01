/* 
Daniel Martins
Patrícia Kushima
Issao Takeuchi
Michel Nunes
Rafael Oliveira
Ruggiero Stello


*/
import { useRef, useState } from "react";

const App = () => {
  // const inputRef = useRef(null);

  const [nomes, setNomes] = useState([]);

  const [valueInput, setValueInput] = useState("");
  const [idadeInput, setIdadeInput] = useState("");
  const [pokemonInput, setPokemonInput] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const [errorInput, setErrorInput] = useState("");

  function handleSubmit(evento) {
    if (valueInput.trim()) {
      setNomes([...nomes, valueInput,idadeInput, pokemonInput]);

      setErrorInput("");
      setValueInput("");
      setIdadeInput("");
      setPokemonInput("");
    } else {
      setErrorInput("Digite um nome no campo");
    }

    evento.preventDefault();
    //alert(inputRef.current.value);
  }

  return (
    <div>      

      <ul>
        {nomes.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        {/* <input ref={inputRef} /> */}
        <label>
         Nome Completo:
        </label>
        <input
          value={valueInput}
          onChange={(event) => setValueInput(event.target.value)}
        />

        <label>
         Idade:
        </label>
        <input
          value={idadeInput}
          onChange={(event) => setIdadeInput(event.target.value)}
        />

        <label>
         Pokemon:
        </label>
        <input
          value={pokemonInput}
          onChange={(event) => setPokemonInput(event.target.value)}
        />
        
        <p>{errorInput}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;