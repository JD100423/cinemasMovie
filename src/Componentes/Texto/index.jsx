import { useState } from "react";
import { TextField } from "@mui/material";

const Texto =(props) => {
    const {type = "text"} = props
    const label= props.label

    return(
        <div className={`campo campo-${type}`}>
            <TextField 
            label={label}
            required={props.required}
            value={props.value}
            type={type}
            />

        </div>
    )
}

export default Texto