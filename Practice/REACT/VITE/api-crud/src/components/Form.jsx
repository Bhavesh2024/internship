import React from 'react'
import { useState } from 'react'

const Form = (props) => {
  const [formData,setFormData] = useState({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
      lat: "",
      lng: ""
      }
  },
  phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
});

  return (
    <div>
          {
            Object.entries(formData).map(([key,value]) => (
                  console.log(key + ':' + value)
            ))
          }
    </div>
  )
}

export default Form
