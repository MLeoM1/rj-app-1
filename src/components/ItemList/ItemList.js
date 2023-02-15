import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ( {productos} ) => {

    return (
        <div className="contenedor">
            <h3 className="productos">Productos:</h3>    
            <section className="contenedor-productos">
                {productos.map((prod) => <Item key={prod.id} {...prod}/> )}
            </section>
        </div>
    )
}

export default ItemList