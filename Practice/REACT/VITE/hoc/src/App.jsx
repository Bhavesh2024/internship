import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import RouteContextProvider from './context/RouteContextProvider'
import AuthRoute from './AuthRoute'
function App() {
  const [count, setCount] = useState(0)
  const DashboardWithAuth = AuthRoute(Dashboard)
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<RouteContextProvider><Login /></RouteContextProvider>}  path='/'/>
            <Route element={<RouteContextProvider><DashboardWithAuth /></RouteContextProvider>} path='/dashboard' />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
