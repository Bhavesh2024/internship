import React from 'react'
import { Outlet } from 'react-router-dom'
import ProductCarouselContainer from '../layout/Slider/ProductCarouselContainer'

const Home = ({withCarousel}) => {
  return (
    <div>
      Home
      {/* <Outlet /> */}
      {
      (!withCarousel && <ProductCarouselContainer />)
      }
    </div>
  )
}

export default Home
