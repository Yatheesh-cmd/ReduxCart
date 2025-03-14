import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Product from './pages/Product'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import './App.css'
import './bootstrap.min (2).css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Header/>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/wish' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     <Footer/>
     
    </>
  )
}

export default App
