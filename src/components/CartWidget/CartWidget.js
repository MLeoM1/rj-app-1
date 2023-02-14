import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './CartWidget.css'

const CartWidget = () => {

    const { totalCantidad, cart } = useCartContext()

    return (
        <div className='carrito-logo'>
            <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
                <FaShoppingCart />
                <span>{totalCantidad()}</span>
            </Link>
        </div>
    )
}

export default CartWidget