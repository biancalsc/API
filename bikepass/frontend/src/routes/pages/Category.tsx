import React, { useEffect, useState } from "react";
import { CategoriesProps } from "../../types";
import CategoriesService from "../../services/CategoriesService";
import { Link } from "react-router-dom";
import "./modelo.css";

function Category() {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([] as CategoriesProps[]);

  // Disparado ao carregar o componente
  useEffect(() => {
    (async () => {
      try {
        const categoryData = await CategoriesService.get();
        if (categoryData) {
          setCategories(categoryData);
        }
      } catch (error) {
        console.error("Erro ao buscar dados das categorias:", error);
      }
    })();
  }, []);

  const load = async () => {
    const res: CategoriesProps[] = await CategoriesService.get();
    setCategories(res);
  };

  const save = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Converter os campos numéricos para inteiros ou floats
    

    // Verificar se as conversões foram bem-sucedidas e se os campos obrigatórios foram preenchidos
    if (
      name.trim() !== ""
    ) {
      const res = await CategoriesService.post({
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
      <h3>Categoria</h3>
      <form onSubmit={save}>
        <div>
          <label>Categoria</label>
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
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
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

export default Category;
