import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/about'
import Contact from './components/contact'
import Navbar from './components/navbar'
import Product from './components/product'
import Details from './components/details'
import Footer from './components/Footer'; 
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { SearchProvider } from './context/SearchContext';
import { CartProvider } from './context/CartContext';


const App = () => {
  return (
      <SearchProvider>
      <CartProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/product' element={<Product />} />
    <Route path='/product/:id' element={<Details />} />
    <Route path="/cart" element={<Cart />} />
     <Route path="/checkout" element={<Checkout />} />
    </Routes>
     <Footer /> 
    </BrowserRouter>
    </CartProvider>
   </SearchProvider>


    
  )
}

export default App