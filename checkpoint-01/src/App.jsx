import { useState } from "react";
import Card from "./Card";
import "./Styles.css";

function App() {
  const [formData, setFormData] = useState({ nome: "", cor: "" });
  const [colorsList, setColorsList] = useState([]);
  const [errorFormData, setErrorFormData] = useState({
    errorNome: "",
    errorCor: "",
    errorCount: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.cor.trim()) {
      setErrorFormData({
        ...errorFormData,
        errorNome: "Campo não pode ficar vazio",
        errorCount: 1,
      });

      console.log(errorCount);
    } else if (formData.nome.length < 4) {
      setErrorFormData({
        ...errorFormData,
        errorNome: "Campo tem que ter mais de 3 caracteres",
        errorCounr: 1,
      });

      console.log(errorCount);
    } else if (formData.cor.length < 6) {
      setErrorFormData({
        ...errorFormData,
        errorNome: "Campo tem que ter pelo menos 6 caracteres",
        errorCount: 1,
      });

      console.log(errorCount);
    } else {
      setErrorFormData({ errorCor: "", errorNome: "", errorCount: 0 });
      setColorsList((old) => [...old, [formData.nome, formData.cor]]);

      console.log(errorCount);
    }
  }

  return (
    <div>
      <div
        className={
          errorFormData.errorCount ? "inputContainerError" : "inputContainer"
        }
      >
        <h1>Adicionar Nova Cor</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs-c">
            <div className="inputContent">
              <label>Nome</label>
              <input
                className={
                  errorFormData.errorCount ? "inputError" : "inputValid"
                }
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
              />
            </div>
            <div className="inputContent">
              <label>Cor</label>
              <input
                className={
                  errorFormData.errorCount ? "inputError" : "inputValid"
                }
                placeholder="Insira sua cor no formato Hexadecimal"
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, cor: e.target.value })
                }
              />
            </div>
          </div>
          <div className="button-c">
            <button type="submit">ADICIONAR</button>
          </div>
        </form>
      </div>
      <div
        className="errorContainer"
        style={errorFormData ? { display: "flex" } : { display: "none" }}
      >
        <p className="errorText">{errorFormData.errorNome}</p>
      </div>

      <div className="cardsContainer">
        <h2>Cores Favoritas</h2>
        <div className="cards-c">
          {colorsList.map((color) => (
            <Card formData={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
