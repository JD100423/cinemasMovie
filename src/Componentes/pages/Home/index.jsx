import React from "react";
import { Container } from "@mui/material";
import MostrarVideo from "../../MostrarVideo";
import ListPost from "../../listPost";

const Home = () => {
    return(
        <Container>
            <MostrarVideo />
            <ListPost url={"post"}/>
            
        </Container>
    )
}

export default Home