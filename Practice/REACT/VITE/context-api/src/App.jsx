import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import {DarkModeContextProvider} from './context/DarkModeContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DarkModeContextProvider>
      <Card />
      </DarkModeContextProvider>
    </>
  )
}

export default App
