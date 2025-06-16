import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './assets/fonts/fonts.css';
import Layout from './Components/Layout/Layout'
import Category from './Components/Pages/Category/Category'
import Brand from './Components/Pages/Brand/Brand'
import ShoppingCart from './Components/Pages/ShoppingCart/ShoppingCart'
import Home from './Components/Pages/Home'

function App() {

  return (
    <>
   
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout /> }>
        <Route index path="/Home" element={<Home />} />
        <Route path="Categories" element={<Category /> }/> 
        <Route path="Brands" element={<Brand /> }/> 
        <Route path="ShoppingCart" element={<ShoppingCart /> }/> 
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
