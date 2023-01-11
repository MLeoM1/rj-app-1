import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ( {productos} ) => {

    return (
        <div className="contenedor">
            <h3>Nuestros productos:</h3>
            <hr/>
            <section className="contenedor-productos">
                {productos.map((prod) => <Item key={prod.id} {...prod}/> )}
            </section>
        </div>
    )
}

export default ItemList