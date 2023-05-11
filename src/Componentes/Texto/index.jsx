import React, {useState } from "react";
import "./Texto.css"
const Texto =(props) => {
    const {type = "text"} = props

    const manejarCambios = (e) => {
        props.actualizarValor(e.target.value)
    };

    return(
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input
            placeholder={props.placeholder}
            required={props.required}
            value={props.valor}
            onChange={manejarCambios}
            type={type}
            />

        </div>
    )
}


export default Texto