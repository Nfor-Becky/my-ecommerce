import React from 'react'
import Navbar from './components/navbar/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/shop';
import Cart from './pages/cart';
import Product from './pages/product';
import ShopCategory from './pages/shopcategory';
import Login from './pages/LoginSignup';
import Footer from './components/footer/Footer';
import womenBanner from './components/assets/WomenBanner.png';
import menBanner from './components/assets/MenBanner.png';
import kidBanner from './components/assets/kidBanner.png';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={menBanner} category="male"/>}/>
          <Route path='/women' element={<ShopCategory banner={womenBanner} category="female"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kidBanner} category="kid"/>}/>
          <Route path="/products" element={<Product />}>
              <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App

