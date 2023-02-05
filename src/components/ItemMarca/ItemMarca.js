import './ItemMarca.css'
import { Link } from 'react-router-dom'

const ItemMarca = () => {

    return ( 
        <div className='container-marca'>

            <div className='marca-detalle'>
                <Link to="/producto/xbox">
                    <img className='marca-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Xbox_app_logo.svg/2048px-Xbox_app_logo.svg.png"/>
                </Link>
            </div>
            <div className='marca-detalle'>
                <Link to="/producto/playstation">
                    <img className='marca-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png"/>
                </Link>
            </div>
            <div className='marca-detalle'>    
                <Link to="/producto/nintendo">
                    <img className='marca-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nintendo_switch_logo.png/480px-Nintendo_switch_logo.png"/>
                </Link>
            </div>
        </div>
    )
}

export default ItemMarca

