import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/main/Home'
import Login from '../components/form/Login'
import SignUp from '../components/form/SignUp'
import Cart from '../components/product/Cart'
import Account from '../components/form/Account'
import Product from '../components/product/CartProduct'
import Dashboard from '../admin/Dashboard'
import CustomerHome from '../hocs/CustomerHome'
import ProductCarouselContainer from '../components/layout/Slider/ProductCarouselContainer'

const CustomHome = CustomerHome(Home)
const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/signup' element={<SignUp/>} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/user' element={<CustomHome />}>
        <Route path=':username' element={<ProductCarouselContainer/>} />
        <Route path=':username/account' element={<Account/>} />
        
        <Route path=':username/cart' element={<Cart />} />
        </Route>
        {/* <Route path='/' element={} />
        <Route path='/' element={} />
        <Route path='/' element={} />
        <Route path='/' element={} />
        <Route path='/' element={} />
        <Route path='/' element={} />
        <Route path='/' element={} />
        <Route path='/' element={} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default RouteConfig
