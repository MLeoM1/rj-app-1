import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import './Checkout.css'
import { collection, writeBatch, documentId, getDocs, query, where, addDoc } from "firebase/firestore"
import { Formik } from "formik"
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string().min(4, 'Mínimo 4 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    direccion: Yup.string().min(8, 'Mínimo 8 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
    email: Yup.string().email('El email no es válido').required('Este campo es obligatorio')
})

const Checkout = () => {
    const { cart, totalCart, emptycart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const createOrder = async (values) => {
        
        const orden = {
            cliente: values,
            items: cart,
            total: totalCart()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'productos')
        
        const outOfStock = []
        
        const itemsRef = query( productosRef, where( documentId(), 'in', cart.map(prod => prod.id) ) )

        const productos = await getDocs(itemsRef)
        
        productos.docs.forEach(doc => {
                const item = cart.find(item => item.id === doc.id)

                if (doc.data().stock >= item.cantidad) {
                    batch.update(doc.ref, {
                        stock: doc.data().stock - item.cantidad
                    })
                } else {
                    outOfStock.push(item)
                }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            emptycart()
                        })
                        .catch((error) => console.log(error) )
                })
        } else {
            alert("Hay items sin stock")
        }
        
    }


    if (orderId) {
        return (
            <div className="check-detalle-1">
                <h2>Tu compra ha sido exitosa</h2>
                <hr/>
                <p>Tu código de orden es: {orderId}</p>
                <Link to="/"><buton className="btn btn-success">Volver</buton></Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="check-detalle">
            <h2>Terminar compra:</h2>
            <hr/>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={(values) => {
                    // console.log(values)
                    createOrder(values)
                }}
                validationSchema={schema}
            >
                {({
                    values, handleChange, handleSubmit, errors
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            className="form-control distancia"
                            onChange={handleChange}
                            type="text"
                            name="nombre"
                            value={values.nombre}
                            placeholder="Nombre completo"
                        />
                        {errors.nombre && <p>{errors.nombre}</p>}

                        <input
                            className="form-control distancia"
                            onChange={handleChange}
                            type="text"
                            name="direccion"
                            value={values.direccion}
                            placeholder="Dirección"
                        />
                        {errors.direccion && <p>{errors.direccion}</p>}

                        <input
                            className="form-control distancia"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={values.email}
                            placeholder="Email"
                        />
                        {errors.email && <p>{errors.email}</p>}

                        <button className="btn btn-success" type="submit">Enviar</button>
                    </form>
                )}
            </Formik>

            
            
        </div>
    )
}

export default Checkout

// cart.forEach(prod => {
        //     const docRef = doc(productosRef, prod.id)
        //     getDoc(docRef)
        //         .then((doc) => {
        //             if (doc.data().stock - prod.cantidad >= 0) {
        //                 updateDoc(docRef, { stock: doc.data().stock - prod.cantidad})
                    
        //             } else {
        //                 alert("No hay stock disponible")
        //             }
        //         })
        // })