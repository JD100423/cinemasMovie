import React from "react";
import { TextField } from "@mui/material";
import "./Texto.css"
const Texto =(props) => {
    const {type = "text"} = props

        const manejarCambio = (e) => {
            props.actualizarValor(e.target.value)
        };

    return(
        <div className={`campo campo-${type}`}>

            <TextField
            style={{width: "100%"}}
            error={props.error}
            label={props.placeholder}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
            />
        </div>
    )
}


export default Texto