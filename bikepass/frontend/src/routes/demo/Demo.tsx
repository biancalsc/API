import { Link } from "react-router-dom";
import { useState } from "react";
import "./Demo.css";

function Demo() {
  const [navegar, setNavegar] = useState("");

  return (
    <div id="bodyx">
      <div className="conteudo">
        <h1>Welcome to the Bikepass demo!</h1>
        <nav>
          <p>Please, select the page you want to see:</p>
          <select id="paginas" onChange={(e) => setNavegar(e.target.value)}>
            <option value="/" selected>
              Select
            </option>
            <option value="/brand">Brand</option>
            <option value="/category">Category</option>
            <option value="/user">User</option>
            <option value="/bike">Bike</option>
            <option value="/home">Home</option>
            <option value="/catalog">Catalog</option>
          </select>
          <Link to={navegar}>Confirma</Link>
        </nav>
      </div>
    </div>
  );
}

export default Demo;