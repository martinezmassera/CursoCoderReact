import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart/Cart';
import ItemListContainer from './component/contenedor/ItemListContainer';
import ItemDetailContainer from './component/ItemDetail/ItemDetailContainer';
import NavBar from './component/NavBar/NavBar';
import CartContextProvider from './context/cartContext';



function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/categoria/:catProducto' element={<ItemListContainer />} />
          <Route exact path='/detalle/:idProducto' element={<ItemDetailContainer />} replace />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
