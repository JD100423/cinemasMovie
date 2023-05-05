import { useState } from 'react';
import Header from './Componentes/Headers';
import { v4 as uuid } from 'uuid';
import Categorias from './Componentes/Categorias';

function App() {

  const [formulario, setFormulario] = useState(true)
  const [videos, actualizarVideo] = useState([{
    id: uuid(),
    categoria: "Action",
    video: "https://youtu.be/Dn2hSvhkkRY",
    foto: "https://hackstore.re/wp-content/uploads/2023/05/y2YZnTT9zdxRdXBKRb0K7BoM0jF-200x300.jpg",
    titulo: "Temblores 6",
    descripcion: " Un día frío en el infierno La secuela nos muestra a Burt Gummer y a su hijo Travis en una estación de investigación remota, donde deberán enfrentarse a los Graboides, que han sido convertidos en armas vivientes.",
    codigo: ""
  },
  {
  id: uuid(),
    categoria: "Comedy",
    video: "https://youtu.be/LM2F56uK0fs",
    foto: "image.png",
    titulo: "Misterio a la vista",
    descripcion: "Ahora que son detectives privados y tienen su propia agencia, Nick y Audrey Spitz terminan en medio de una investigación internacional tras el secuestro de un amigo.",
    codigo: ""
  },
  {
  id: uuid(),
    categoria: "Animation",
    video: "https://youtu.be/u8A_F5oYJGI",
    foto: "https://hackstore.re/wp-content/uploads/2023/04/ow4rUCl5RSoAXBjbeBQeE3ZPfzA-200x300.jpg",
    titulo: "Norman del Norte",
    descripcion: "cuenta la historia del oso polar titular y sus tres compañeros de lemming del Ártico, quienes son forzados a salir al mundo una vez que su hogar helado comienza a derretirse y romperse.",
    codigo: ""
  },
  {

    id: uuid(),
    categoria: "Romance",
    video: "https://youtu.be/7rVxq0WB09Q",
    foto: "https://hackstore.re/wp-content/uploads/2022/09/iA7oMNByuPRIapcILH8zwEoxV2h-202x300.jpg",
    titulo: "After: Amor infinito",
    descripcion: " El amor de Tessa y Hardin nunca ha sido fácil. Mientras él permanece en Londres después de la boda de su madre y se hunde cada vez más en su propia oscuridad, ella regresa a Seattle.",
    codigo: ""
  }

]
)

  const [categorias, setCategoria] = useState([
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
      titulo: "Romantic",
      colorPrimario: "#6BD1FF",
    },
  ])

  const agregarNuevoVideo = (video) => {
    actualizarVideo([...videos, video])
  }

  const crearCategoria =(nuevaCategoria) => {
    setCategoria([...categorias, { nuevaCategoria, id: uuid()}])
  }
  
  return (
    <div>
    <Header />
    {
      categorias.map((categoria) => <Categorias datos={categoria} key={categoria.titulo}
      videos={videos.filter(video => video.categoria === categoria.titulo)}
      
      />)
    }

    </div>
  );
}

export default App;
