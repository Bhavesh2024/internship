import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [data,setData] = useState({
    fname:"",
    lname:""
  })

  const firstInput = useRef();
  const input = useRef({
    fname:"",
    lname:"hi",
  })
  useEffect(()=>{
     firstInput.current.focus();
     console.log(firstInput.current.value)
     firstInput.current.style="background:skyblue"
  },[])

  const handleInput = (e) =>{
      const {name,value} = e.target;
      setData({...data,[name]:value})
      // firstInput.current = data.fname;
      console.log(firstInput.current.value)
  }

  try{
    
    console.log(firstInput.current.value)
    console.log(input.lname)
  } catch(e){
     console.log(e)
  }
  return (
    <>
        <div>
           <form action="">
            <input type="text" name='fname' ref={firstInput} placeholder='First Name' value={data.fname} onChange={handleInput} required/>
            {/* <input type="text" name='jname' ref={firstInput} placeholder='First Name' onChange={handleInput} required/> */}

            <input type="text" name='lname' ref={input.current} placeholder='Last Name' value={data.lname} onChange={handleInput} required/>
            <button type='submit' name='submit'>Submit</button>
           </form>
        </div>
    </>
  )
}

export default App
