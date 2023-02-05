import './ItemListMarca.css'
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListMarca = () => {

    const [productos, setProductos] = useState([])
    const { marcaId } = useParams()

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (marcaId) {
                    setProductos( res.filter(prod => prod.marca === marcaId) )
                } else {
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [marcaId])


    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListMarca