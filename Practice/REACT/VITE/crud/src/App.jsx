import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import DataContext from './context/DataContext'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  const [data,myData] = useState({
      id:0,
      name:"",
      phone:"",
      email:"",
      password:""
  })

  const [userData,setUserData] = useState([]);

  return (
    <>
      <DataContext.Provider value={{userData,setUserData}}>
      <Form title={"register"} data={data} handler={(myData)}/>
      </DataContext.Provider>
    </>
  )
}

export default App
