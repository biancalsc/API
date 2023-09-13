import axios from "axios";
import { useState } from "react";

function User() {
  const [alias, setAlias] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  function salvar() {
    axios
      .post("http://localhost:3001/usuario", { alias, mail, phone })
      .then(({ data }) => console.log(data));
  }
  return (
    <div>
      <div>
        <input
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          placeholder="Digite o nome de usuário"
        />
      </div>
      <div>
        <input
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Digite o email"
        />
      </div>
      <div>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Digite o número do telefone"
        />
      </div>
      <div>{alias}</div>
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}

export default User;
