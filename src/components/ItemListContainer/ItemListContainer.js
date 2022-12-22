import './ItemListContainer.css'

export const ItemListContainer = (props) => {
    return(
        <body>
            <div className='contenedor'>
                <p>{ props.greeting }</p>
            </div>
        </body>
    )
}
