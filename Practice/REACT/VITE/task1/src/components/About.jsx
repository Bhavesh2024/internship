import React from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
const About = () => {
  const data = [
    1,'Bhavesh Parmar','bparmar1722004@gmail.com','9723884857'
  ]
  const myData = {
    name:'bhavesh',
    age:20
  }
  const navigate = useNavigate();
  return (
    <div>
       <Header/>
        <h1>About Page</h1>
        {
          data.map((value)=>(
            <span>{value}</span>
          ))
        }
        {
          Object.entries(myData).map((value,key)=>(
            <p><span>{key}</span><span>{value}</span></p>
          ))
        }
        <button onClick={()=> navigate(`/contact/${data[2]}`)}>Send</button>
    </div>
  )
}

export default About
