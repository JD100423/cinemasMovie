import React from "react";
import styled from "styled-components";
import { ColorBtnReset } from "../UI/variables";

const Bton = styled.button`
    background-color: ${ColorBtnReset};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 15px;
    color: #000;
    padding: 15px;
    display: flex;
    font-weight: 600;
    border-radius: 3px;
    border: none;
    
        @media (max-width: 500px){
        margin-top: 15px;
        margin-right: 10px;
    
    }
`

const BtnReset = (props) => {
    return (
        <>
        <Bton type="reset" onClick={props.onClick}>{props.text}</Bton>
        </>
    )
}

export default BtnReset;