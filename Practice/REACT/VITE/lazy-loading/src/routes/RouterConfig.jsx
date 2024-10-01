import React from 'react'
import {BrowserRouter, Routes,Route, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
// import About from '../pages/About'
// import Service from '../pages/Service'
// import Contact from '../pages/Contact'
import { Suspense } from 'react'
import { lazy } from 'react'
import LazyLoad from '../components/LazyLoad'

const About = LazyLoad( () => (import('../pages/About')))
const Contact = LazyLoad(() =>(import('../pages/Contact')))
const Service = LazyLoad(() =>(import('../pages/Service')))

const RouterConfig = () => {
  return <>
  

  <BrowserRouter>
        <Routes>
           <Route element={<Home />} path='/' />
    
           <Route element={<About />} path='about' />
           <Route element={<Contact />} path='contact' />
           <Route element={<Service/>} path='service' />
           
        </Routes>
      </BrowserRouter>
  </>
}

export default RouterConfig
