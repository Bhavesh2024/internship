import React, { useState } from 'react'
import Modal from './Modal';
import DataContext from '../context/DataContext';

const Table = ({data,setData}) => {

  const [open,setOpen] = useState({
    id:0,
    modal:"",
    isOpen:false
  });
  
  const handleModal = (value,userId) =>{
    console.log(value);
     if(value == 'update'){
       setOpen({...open,modal:'update',id:userId,isOpen:true})
     } else{

       setOpen({...open,modal:'delete',id:userId,isOpen:true})
     }
  }
  return (
    <>
      {
         (open.modal == 'delete' && open.isOpen) ? <Modal id={open.id} title={open.modal} /> : <Modal id={open.id} title={open.modal} /> 
      }
      <table>
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>PHONE</th>
          <th>EMAIL</th>
          <th>PASSWORD</th>
          <th>UPDATE</th>
          <th>DELETE</th>
        </thead>
        <tbody>
          {
            data.map((value)=>(
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.phone}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
                <td><button onClick={(e) => handleModal('update',value.id)}> Edit</button></td>
                <td><button onClick={(e) => handleModal('delete',value.id)}> Remove</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      
    </>
  )
}

export default Table
