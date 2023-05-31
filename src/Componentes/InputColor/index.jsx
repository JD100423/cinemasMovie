import React from "react";
import { Box, TextField } from "@mui/material";
const InputColor = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return (
        <Box component="div"style={{width: "100%"}}> 
        <TextField 
        style={{
            width: "100%",
            boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.06)",
            border: "none",
            padding: "30px 20px",
            outlineColor: "#2A7AE4",
            lineHeight: "14px",
            boxSizing: "border-box",
            margin: "24px 0"
        }}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={props.type}
        />
        </Box>
    )
}

export default InputColor;