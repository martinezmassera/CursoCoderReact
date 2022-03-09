import './App.css';
import ItemListContainer from './component/contenedor/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import NavBar from './component/NavBar/NavBar';



function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer />
       <ItemDetailContainer />
    </div>
  );
}

export default App;
