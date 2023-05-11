import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { buscar } from "../../api/api";
import { Container } from "@mui/material";

const Post = ({url}) =>{
    const[post, setPost] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        buscar(`/posts/${id}`, setPost).catch(() => {
            navigate("/not-found")
        })
    }, [id])
    return(
        <Container>
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </Container>
    )
}

export default Post