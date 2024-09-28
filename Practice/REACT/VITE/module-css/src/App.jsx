import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import style from "./module/style.module.css"
import styled from "styled-components"
function App() {
  const [count, setCount] = useState(0)
  const Button = styled.button`background-color:royalblue;color:white;border-radius:50px`
  return (
    <>
       <button className={style.button}>Sign Up</button>
       <button >Login</button>
       <Button>Go to Dashboard</Button>
    </>
  )
}

export default App
