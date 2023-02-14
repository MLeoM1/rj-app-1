import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {

    const { cart, emptycart, totalCart, removerItem } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="carrito-detalle">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <p>Empieza a comprar!</p>
                <Link to="/" className="btn btn-danger">Volver</Link>
            </div>
        )
    }

    return (
        <div className="check-detalle">
            <h2>Tu compra</h2>
                <hr/>

                {
                    cart.map(item => (
                        <div className="productos-detalle" key={item.id}>
                            <h4>{item.name}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: ${item.price * item.cantidad}</p>
                            <button onClick={() => removerItem(item.id)} className="btn btn-outline-danger"><FaTrashAlt /></button>
                            <hr/>
                        </div>
                    ))
                }

                <h4 className="total">Total: ${ totalCart() }</h4>
            
            <button className="btn btn-danger my-3" onClick={emptycart}>Vaciar carrito</button>
            <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart