import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Data = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <>
     {/* <div>Id : {data.id}</div>
     <div>Title : {data.title}</div>
     <div>Body : {data.body}</div> */}
      {
        data.map((value,key) => (<ul>
          <li>{value.id}</li>
          <li>{value.title}</li>
          <li>{value.body}</li>
        </ul>))
      }
    </>
  )
}

export default Data
