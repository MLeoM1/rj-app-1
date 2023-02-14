import React from 'react'
import { BrowserRouter, } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";


const AppRouter = () => {


    return (
        <BrowserRouter>
            <PrivateRoutes />
        </BrowserRouter>
    )
}

export default AppRouter