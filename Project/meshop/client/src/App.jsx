import { useEffect, useState ,useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouteConfig from './routes/RouteConfig'
import Home from './components/main/Home'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const {theme} = useContext(ThemeContext);
  useEffect(() =>{
      document.documentElement.classList.add(theme);
  },[theme])
  return (
    <>
      <RouteConfig /> 
    </>
  )
}

export default App
