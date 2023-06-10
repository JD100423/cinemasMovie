import React from "react";
import { TextField } from "@mui/material";
import "./Texto.css";
const Texto =(props) => {
    const {type = "text"} = props

        const manejarCambio = (i) => {
            props.actualizarValor(i.target.value)

        }

    return(
        <div className={`campo campo-${type}`}>

            <TextField
            style={{width: "100%"}}
            error={props.error}
            label={props.placeholder}
            required={props.required }
            value={props.valor}
            helperText={props.helperText}
            onChange={manejarCambio}
            onBlur={props.onBlur}
            type={type}
            />
        </div>
    )
}


export default Texto