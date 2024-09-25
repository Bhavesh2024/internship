import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Timer = () => {
  const [data,setData] = useState([]);
  const [count,setCount] = useState(0);
  const [calculation,setCalculation] = useState(0)
  // useEffect(()=>{
  //   setCalculation(calculation => count * count)
  // },[count])

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setCalculation(calculation => calculation + 1)
    },1500)

    return () => clearTimeout(timer)
  },[])

  useEffect(()=>{
    const fetchData = async() =>{
       await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
       .then(response => response.json())
       .then(json => setData(prevData => [...prevData,json]))
    }
    if(count > 0){
      fetchData()
    }
  },[count])
  // console.log(data)
  return (
    <>
      <div className="count">
        Count is {count}
      </div>
      <div>
        Square is {calculation}
      </div>
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
      {/* <p>{console.log(data[0])}</p> */}
      {console.log(data)}
      <table>
         <thead>
           <th>ID</th>
           <th>TITLE</th>
         </thead>
         <tbody>
          {
            data.map((value) =>(
              <tr>
                <td>{value.id}</td>
                <td>{value.title}</td>
              </tr>
            ))
          }
         </tbody>
      </table>
    </>
  )
}

export default Timer
