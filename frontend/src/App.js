import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Pages/Shop';
import Cart from './Components/Pages/Cart';
import LoginSignUp from './Components/Pages/LoginSignUp';
import {BrowserRouter,Router,Route, Routes} from 'react-router-dom';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div >
      <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path ='/' element={<Shop/>}/>
     <Route path ='/mens' element={<ShopCategory banner ={men_banner} category="men"/>}/>
     <Route path ='/women' element={<ShopCategory banner ={women_banner} category="women"/>}/>
     <Route path ='/kids' element={<ShopCategory banner ={kid_banner} category="kid"/>}/>
     <Route path ='/product' element = {<Product/>}>
     <Route path = ':productId' element = {<Product/>}/>
     </Route>
     <Route path ='/cart' element={<Cart/>}/>
     <Route path ='/login' element={<LoginSignUp/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
