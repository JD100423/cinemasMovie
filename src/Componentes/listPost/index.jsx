import { useState, useEffect } from "react";
import { buscar } from "../../api/api";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const ListPost = ({url}) => {
    const [post, setPost] = useState([])

    useEffect(() => {
        buscar(url, setPost)
    }, [url])
    return(
        <Container>
            {
                post.map(post => {
                    const {id, title, metadescription} = post
                    return<Link to={`/post/${id}`} key={id}>
                        <main>
                            <h2>{title}</h2>
                            <p>{metadescription}</p>
                        </main>
                    </Link>
                })
            }
        </Container>
    )
}

export default ListPost