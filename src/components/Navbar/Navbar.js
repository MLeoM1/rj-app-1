import './Navbar.css'
import logo from '../assets/img/logo.jpg'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {

    return ( 
        <header className="header">
            <div className='header-container'>
                <h1 className="header-logo">
                    <Link to="/"><img className='logo' src={logo}/></Link>
                </h1>
                <nav className="header-nav">
                    <Link className="header-link" to="/productos/consola">Consola</Link>
                    <Link className="header-link" to="/productos/joystick">Joystick</Link>
                    <Link className="header-link" to="/productos/suscripcion">Suscripciones</Link>
                    <CartWidget />
                </nav>
            </div>
        </header>
    )
}