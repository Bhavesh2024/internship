import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from './Header'

const Contact = () => {
  // const location = useLocation();
  // const data = location.state?.data;
  // console.log(data)
  const {data} = useParams();
  console.log(data);
  return (
    <div>
      <Header />
       Contact Page
       {/* <ul>
        {data.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Contact

