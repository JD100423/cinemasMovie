import React from "react";
import "./list.css";
import { TextField, MenuItem } from "@mui/material";

  const ListCategories = (props) => {
    const inputId = `texto-${Math.random().toString(36).substring(7)}`;

    const manejarCambios = (e) => {
      props.setCategoria(e.target.value)
      console.log(e.target.value)
  };

    return (
      <div className="list-cat">
        <TextField 
          style={{width: "100%",
        display:"flex"}}
          id={inputId}
          label={props.placeholder}
          select
          value={props.valor}
          onChange={manejarCambios}
          >
          <MenuItem value="" disabled hidden>
            Seleccionar Categoría
          </MenuItem>
          {props.categorias?.map((categoria, index) => (
            <MenuItem key={index} value={categoria.nombre}>
              {categoria.nombre}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  };

  export default ListCategories;

