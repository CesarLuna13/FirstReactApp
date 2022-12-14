//import logo from './logo.svg';
import './App.css';
//import Button from "./components/Button/Button";
import NavBar from "./components/Nav/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Supermercado from './components/Pages/Supermercado/Supermercado';



//npm run start

function App() {
  return (
    

    <BrowserRouter>
      <NavBar/>
      <Routes>
        
        <Route exact path="/supermercado" element={<Supermercado/>} />

      </Routes>


      <ItemListContainer greeting="Hola hjfkhyud">
      </ItemListContainer>
      
    </BrowserRouter>

  );
}

export default App;
