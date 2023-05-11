import React, {useState} from "react";
import "./list.css";

const ListCategories = (props) => {
console.log(props)

  const manejar = (e) => {
    props.actualizarCat(e.target.value);
  };

  return (
    <div className="list-cat">
      <label>Categorias</label>
      <select value={props.valor} onChange={manejar}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar Categoría
        </option>
        {props.categorias?.map((categoria, index) => (
          <option key={index} value={categoria.titulo}>
            {categoria.titulo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListCategories;

