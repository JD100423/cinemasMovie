import React from "react";
import { Box, TextField } from "@mui/material";
const InputColor = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return (
        <Box component="div"
        style={{
            width: "100%", 
            margin: "24px 0",
                }}> 
        <TextField 
        style={{
            width: "100%",
            boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.06)",
            border: "none",
            padding: "30px 20px",
            outlineColor: "#2A7AE4",
            lineHeight: "14px",
            boxSizing: "border-box",
        }}
        required={props.required}
        placeholder={props.placeholder}
        value={props.valor}
        onChange={manejarCambio}
        type={props.type}
        error={props.error}
        helperText={props.helperText}
        onBlur={props.onBlur}
        />
        </Box>
    )
}

export default InputColor;