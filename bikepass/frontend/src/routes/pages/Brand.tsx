import React, { useEffect, useState } from "react";
import { BrandProps } from "../../types";
import BrandsService from "../../services/BrandService";
import { Link } from "react-router-dom";
import "./modelo.css";

function Brand() {
  const [name, setName] = useState("");
  const [brands, setBrands] = useState([] as BrandProps[]);

  // Disparado ao carregar o componente
  useEffect(() => {
    (async () => {
      try {
        const brandData = await BrandsService.get();
        if (brandData) {
          setBrands(brandData);
        }
      } catch (error) {
        console.error("Erro ao buscar dados das categorias:", error);
      }
    })();
  }, []);

  const load = async () => {
    const res: BrandProps[] = await BrandsService.get();
    setBrands(res);
  };

  const save = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Converter os campos numéricos para inteiros ou floats
    

    // Verificar se as conversões foram bem-sucedidas e se os campos obrigatórios foram preenchidos
    if (
      name.trim() !== ""
    ) {
      const res = await BrandsService.post({
        name: name.trim()
      });
      if (res.error) {
        alert(res.error);
      } else {
        load();
        reset();
      }
    }
  };

  const reset = () => {
    setName("");
  };

  return (
    <div className="conteudo">
      <h3>Marca</h3>
      <form onSubmit={save}>
        <div>
          <label>Marca</label>
          <br />
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <button type="submit">Salvar</button>
          <button type="button" onClick={reset}>
            Limpar
          </button>
          <Link to="/">Voltar</Link>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Brand;
