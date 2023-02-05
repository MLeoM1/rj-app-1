import './ItemDetail.css'
import { useNavigate } from "react-router-dom"

const ItemDetail = ( {id, name, stock, category, image, description, price, marca,} ) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="container-detalle">
            <h2 className='nombre-producto'>{name}</h2>
            <div className='container-precio'>
                <img className="imagen-detalle" src={image}/>
                <p>Precio: ${price}</p>
            </div>
            <br/>
            <small>Categoría: {category}</small>
            <br/>
            <p>{description}</p>
            <p>Marca: {marca}</p>
            <hr/>
            <button className="btn btn-success" onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default ItemDetail