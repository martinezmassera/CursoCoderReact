import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemCount from './component/contenedor/ItemCount';
import ItemListContainer from './component/contenedor/ItemListContainer';
import ItemDetailContainer from './component/ItemDetail/ItemDetailContainer';
import NavBar from './component/NavBar/NavBar';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cart' element={<ItemCount />} />
          <Route path='/categoria/:catProducto' element={<ItemListContainer />} />
          <Route exact path='/detalle/:idProducto' element={<ItemDetailContainer />} replace />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
