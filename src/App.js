import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {

  return (

    <BrowserRouter>

      <Navbar /> 
      
      <Routes>
        <Route path="/" element={ <ItemListContainer/> }/>
        <Route path="/productos/:categoryId" element={ <ItemListContainer/> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
        <Route path="*" element={ <Navigate to={"/"}/> }/>
        {/* <Route path="*" element={ <Error404 /> }/> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
