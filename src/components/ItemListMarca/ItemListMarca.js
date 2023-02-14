import './ItemListMarca.css'
import ItemMarca from "../ItemList/ItemList"
import useCollection from "../../hooks/useCollection"
import { useParams } from "react-router-dom"
import { where } from "firebase/firestore"

const ItemListMarca = () => {

    const { marcaId } = useParams()
    const { data, loading } = useCollection(
            "productos",
            [marcaId],
            marcaId && 
            [
                where("marca", "==", marcaId)
            ]
        )

    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemMarca productos={data}/>
            }
        </div>
    )
}

export default ItemListMarca