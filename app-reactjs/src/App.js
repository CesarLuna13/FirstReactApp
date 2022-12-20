import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {Routes, Route} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home/Home';
import Ofertas from './components/Pages/Ofertas/Ofertas';
import Historial from './components/Pages/Historial/Historial';
import Supermercado from './components/Pages/Supermercado/Supermercado';
import Moda from './components/Pages/Moda/Moda';
import Vender from './components/Pages/Vender/Vender';
import Ayuda from './components/Pages/Ayuda/Ayuda';



//npm run start

function App() {
  return (
    
    <div className='divGeneral'>
      <Layout>
        {/* <NavBar/> */}
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route caseSensitive path="/ofertas" element={<Ofertas/>} />
          <Route caseSensitive path='/historial' element={<Historial/>} />
          <Route caseSensitive path="/supermercado" element={<Supermercado/>} />
          <Route caseSensitive path='/moda' element={<Moda/>} />
          <Route caseSensitive path='/vender' element={<Vender/>} />
          <Route caseSensitive path='/ayuda' element={<Ayuda/>} />
        </Routes>

        {/*<ItemListContainer greeting="Hola hjfkhyud"></ItemListContainer>*/}
      </Layout>

    </div>
  );
}

export default App;
