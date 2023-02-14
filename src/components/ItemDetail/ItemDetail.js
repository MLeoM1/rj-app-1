import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ( {id, name, stock, category, image, description, price, marca} ) => {

    const { agregarAlCarrito, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const item = {
            id,
            name,
            stock,
            category,
            image,
            description,
            price,
            cantidad
        }

        agregarAlCarrito(item)
    }

    return (
        <div className="container-detalle">
            <div className="container-detalle-3">
                <h2 className='nombre-producto'>{name}</h2>
                <img className="imagen-detalle" src={image} alt=""/>
                <br/>
            </div>
            <div className="container-detalle-2">
                    <p>Precio: ${price}</p>
                    { stock <= 20 && <h5>Últimas unidades disponibles!</h5> }
                    {
                        !isInCart(id)
                            ? <ItemCount 
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}
                                    max={stock}
                                    onAdd={handleAgregar}
                                />
                            : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                    }
            </div>
            <div className="container-detalle-2">
                <p>{description}</p>
                <p>Marca: {marca}</p>
                <p>Categoría: {category}</p>
            </div>
                {/* <Select 
                    options={talles}
                    set={setTalle}
                /> */}
            
            <button className="btn btn-success boton" onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default ItemDetail