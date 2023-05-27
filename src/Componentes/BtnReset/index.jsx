import React from "react";
import { Button } from "@mui/material";

const BtnReset = (props) => {
    const {resetForm}= props
    return (
        <Button type="reset" variant="contained" style={{
            color: "#000",
            backgroundColor: "#BFC1D0",
            padding: "0px, 10px",
            border: "none",
            borderRadius: "5.62px"
        }} onClick={resetForm}>{props.text}</Button>
    )
}

export default BtnReset;