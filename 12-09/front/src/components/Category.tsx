import axios from "axios";
import { useState } from "react";

function Category() {
  const [name, setName] = useState("");

  function salvar() {
    axios
      .post("http://localhost:3001/categoria", { name })
      .then(({ data }) => console.log(data));
  }

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite a categoria da bike"
      />
      <div>{name}</div>
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}

export default Category;
