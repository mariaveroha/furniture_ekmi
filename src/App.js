import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainTitle from './components/MainTitle/MainTitle';
import Catalog from './components/Catalog/Catalog';
import Sofa from './components/FurnitureCategoriesInCatalog/Sofa/Sofa';
import Bed from './components/FurnitureCategoriesInCatalog/Bed/Bed';
import Chair from './components/FurnitureCategoriesInCatalog/Chair/Chair';
import Puf from './components/FurnitureCategoriesInCatalog/Puf/Puf';
import Matrac from './components/FurnitureCategoriesInCatalog/Matrac/Matrac';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainTitle />}/>
        <Route path='/catalog' element = {<Catalog/>}/>
        <Route path='/catalog/sofa' element = {<Sofa/>}/>
        <Route path='/catalog/bed' element = {<Bed/>}/>
        <Route path='/catalog/chair' element = {<Chair/>}/>
        <Route path='/catalog/puf' element = {<Puf/>}/>
        <Route path='/catalog/matrac' element = {<Matrac/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
