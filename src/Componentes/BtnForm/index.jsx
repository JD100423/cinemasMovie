import React from "react";
import { Button } from "@mui/material";
import { colorPrimario } from "../UI/variables";

const Btn = (props) => {
    return(
        <>
        <Button type="submit" style={{
            backgroundColor: `${colorPrimario}`,
            fontFamily: "'Source Sans Pro', 'sans serif'",
            color: "#fff",
            padding: "15px",
            display: "flex",
        }}>{props.texto}</Button>
        </>

    )
    
}

export default Btn;