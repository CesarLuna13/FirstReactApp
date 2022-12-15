//import logo from './logo.svg';
import './App.css';
//import Button from "./components/Button/Button";
import NavBar from "./components/Nav/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Routes, Route} from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Supermercado from './components/Pages/Supermercado/Supermercado';



//npm run start

function App() {
  return (
    
    <div className='divGeneral'>
      
        {/* <NavBar/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route exact path="/supermercado" element={<Supermercado/>} />
        </Routes>

      {/*<ItemListContainer greeting="Hola hjfkhyud"></ItemListContainer>*/}

    </div>
  );
}

export default App;
