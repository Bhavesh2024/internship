import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {LazyLoadRoute} from './LazyLoadRoute'
import { ErrorBoundary } from 'react-error-boundary'
import Home from '../pages/Home'
import ErrorComponent from '../components/ErrorComponent'
// const Home = LazyLoadRoute(import('../pages/Home'))
const Post = LazyLoadRoute(import('../pages/Post'))
const Contact = LazyLoadRoute(import('../pages/Contact'))

const RouteConfig = () => {
  <Router>
    <Routes>
      <Route  path="/" element={<ErrorBoundary FallbackComponent={ErrorComponent}><Home /></ErrorBoundary>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route  path="/post" element={<Post />} />
    </Routes>
  </Router>
}

export default RouteConfig
