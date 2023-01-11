import { Link } from "react-router-dom"
import './Item.css'

const Item = ( {name, image, description, price, category, id} ) => {

    return (
        <div className="contenedor-item">
            <img className="imagen-productos" src={image} alt={name}/>
            <h4>{name}</h4>
            {/* <p>{description}</p> */}
            <h5>Precio: <b>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)}</b></h5>
            <h6>Categoría: {category}</h6>
            <Link to={`/detail/${id}`} className="btn btn-outline-success boton-ver">Ver más</Link>
        </div>
    )
}

export default Item