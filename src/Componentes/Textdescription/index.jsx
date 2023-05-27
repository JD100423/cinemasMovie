import React from "react";
import { TextField } from "@mui/material";


const TextDescription = (props) => {
    const inputId = `texto-${Math.random().toString(36).substring(7)}`;

    const manejarCambios = (e) => {
        props.actualizarValor(e.target.value)
    };
    return(
        <TextField
        style={{width: "100%",
        fontFamily: "'Source Sans Pro, sans serif"
        }}
        id={inputId}
        multiline
        label={props.placeholder}
        rows={4}
        value={props.valor}
        onChange={manejarCambios}
        />
    )
}

export default TextDescription