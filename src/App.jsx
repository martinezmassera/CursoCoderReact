import './App.css';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/contenedor/ItemListContainer';


function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer initial = {1} stock = {10}/>
    </div>
  );
}

export default App;
