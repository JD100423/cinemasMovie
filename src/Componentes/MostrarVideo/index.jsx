import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import Categorias from "../Categorias";


const MostrarVideo = () => {

    const [videos] = useState([
        {
          id: uuid(),
          categoria: "Action",
          video: "https://lvturbo.com/lqxv2rh0j1u2.html",
          foto: "https://hackstore.re/wp-content/uploads/2023/05/y2YZnTT9zdxRdXBKRb0K7BoM0jF.jpg",
          titulo: "Temblores",
          descripcion: " Un día frío en el infierno La secuela nos muestra a Burt Gummer y a su hijo Travis en una estación de investigación remota, donde deberán enfrentarse a los Graboides, que han sido convertidos en armas vivientes.",
          codigo: ""
        },
        {
        id: uuid(),
          categoria: "Comedy",
          video: "https://drive.google.com/file/d/18Anc7yfIujjRJEAfTmD2ShujL63Fc81D/view",
          foto: "https://hackstore.re/wp-content/uploads/2023/04/w1CviNrfYjtPDN6UTIUcqCe3WfN.jpg",
          titulo: "Misterio a la vista",
          descripcion: "Ahora que son detectives privados y tienen su propia agencia, Nick y Audrey Spitz terminan en medio de una investigación internacional tras el secuestro de un amigo.",
          codigo: ""
        },
        {
        id: uuid(),
          categoria: "Animation",
          video: "https://lvturbo.com/x8q3qb2kbzbm.html",
          foto: "https://hackstore.re/wp-content/uploads/2023/04/ow4rUCl5RSoAXBjbeBQeE3ZPfzA.jpg",
          titulo: "Norman del Norte",
          descripcion: "cuenta la historia del oso polar titular y sus tres compañeros de lemming del Ártico, quienes son forzados a salir al mundo una vez que su hogar helado comienza a derretirse y romperse.",
          codigo: ""
        },
        {
      
          id: uuid(),
          categoria: "Romance",
          video: "https://sblanh.com/g30oe7bu5bos.html",
          foto: "https://hackstore.re/wp-content/uploads/2022/09/iA7oMNByuPRIapcILH8zwEoxV2h-202x300.jpg",
          titulo: "After: Amor infinito",
          descripcion: " El amor de Tessa y Hardin nunca ha sido fácil. Mientras él permanece en Londres después de la boda de su madre y se hunde cada vez más en su propia oscuridad, ella regresa a Seattle.",
          codigo: ""
        },
        {
          id: uuid(),
          categoria: "Action",
          video: "https://lvturbo.com/lqxv2rh0j1u2.html",
          foto: "https://hackstore.re/wp-content/uploads/2023/05/y2YZnTT9zdxRdXBKRb0K7BoM0jF.jpg",
          titulo: "Temblores",
          descripcion: " Un día frío en el infierno La secuela nos muestra a Burt Gummer y a su hijo Travis en una estación de investigación remota, donde deberán enfrentarse a los Graboides, que han sido convertidos en armas vivientes.",
          codigo: ""
        },
        {
        id: uuid(),
          categoria: "Comedy",
          video: "https://drive.google.com/file/d/18Anc7yfIujjRJEAfTmD2ShujL63Fc81D/view",
          foto: "https://hackstore.re/wp-content/uploads/2023/04/w1CviNrfYjtPDN6UTIUcqCe3WfN.jpg",
          titulo: "Misterio a la vista",
          descripcion: "Ahora que son detectives privados y tienen su propia agencia, Nick y Audrey Spitz terminan en medio de una investigación internacional tras el secuestro de un amigo.",
          codigo: ""
        },
        {
        id: uuid(),
          categoria: "Animation",
          video: "https://lvturbo.com/x8q3qb2kbzbm.html",
          foto: "https://hackstore.re/wp-content/uploads/2023/04/ow4rUCl5RSoAXBjbeBQeE3ZPfzA.jpg",
          titulo: "Norman del Norte",
          descripcion: "cuenta la historia del oso polar titular y sus tres compañeros de lemming del Ártico, quienes son forzados a salir al mundo una vez que su hogar helado comienza a derretirse y romperse.",
          codigo: ""
        },
        {
      
          id: uuid(),
          categoria: "Romance",
          video: "https://sblanh.com/g30oe7bu5bos.html",
          foto: "https://hackstore.re/wp-content/uploads/2022/09/iA7oMNByuPRIapcILH8zwEoxV2h-202x300.jpg",
          titulo: "After: Amor infinito",
          descripcion: " El amor de Tessa y Hardin nunca ha sido fácil. Mientras él permanece en Londres después de la boda de su madre y se hunde cada vez más en su propia oscuridad, ella regresa a Seattle.",
          codigo: ""
        }
      ]
      );

    const [categorias, setCategorias] = useState([
        {
          id: uuid(),
          titulo: "Action",
          colorPrimario: "#2A7AE4",
        },
        {
          id: uuid(),
          titulo: "Comedy",
          colorPrimario: "#00C86F",
        },
        {
          id: uuid(),
          titulo: "Animation",
          colorPrimario: "#FF8C2A",
        },
        {
          id: uuid(),
          titulo: "Romance",
          colorPrimario: "#6BD1FF",
        },
      ]);

      const ActCategoria = (id, titulo) => {
        setCategorias((prevCategorias) => prevCategorias.map((categoria) =>
        categoria.id === id ? {...categoria, titulo: titulo} : categoria
        )
        )
      }

      return (
        <>
            {categorias.map((categoria) => (
            <Categorias
               datos={categoria}
               key={categoria.id}
               valor={categoria.titulo}
               setCategorias={(nuevoTitulo) => ActCategoria(categoria.id, nuevoTitulo)}
                videos={videos.filter((video) => video.categoria === categoria.titulo)}
              />
           ))}
          </>

      );
}

export default MostrarVideo