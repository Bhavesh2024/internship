import React from 'react'
import { fetchData } from '../data/fetchData'
import { useEffect } from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.css'
import { Modal } from 'bootstrap'
const Table = () => {
  const [data,setData] = useState([]);
  const [openModal,setOpenModal] = useState({
    modal:'',
    status:false,
  });
  const url = 'https://jsonplaceholder.typicode.com/users';
  useEffect(() =>{
    fetchData(url,data,setData)
  },[])

  if(data.length == 0){
  } else{
     console.log(data)
  }

 const addUser = async (data) =>{
  //  const id = data.length + 1;
   const newUser = JSON.stringify(data);
   console.log(data)

   const response = await fetch(url,{method:"POST",body:newUser})

   try
   {
      if(!response.ok){
        throw new Error('Something Goes Wrong')
      } else{
        console.log('New User Added')
         await fetchData(url,response.json(),setData);
      }
   } catch(error){
      console.error(error)
   }

 }
  const editUser = async ( id) => {
    const newUser = data[id - 1];
    newUser.name= 'bhavesh'
    newUser.phone='+91 9723884857'
    console.log(newUser)
    try {
        const response = await fetch(url +"/" +id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(newUser) 
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json(); 
        console.log('New User Updated:', data);
        
        await fetchData(url, data, setData); 
    } catch (error) {
        console.error('Error:', error);
    }
};

const deleteUser = async(id) =>{
   const deletedUser = data.slice(id - 1, id)
   console.log(deletedUser)

 try{
  
  const response = await fetch(url + "/" + id,{method:'DELETE',body:JSON.stringify(deletedUser)})
    if(!response.ok){
      throw new Error("Something Went Wrong")
     } else{
       console.log("User Data deleted");
       await fetchData(url,response.json(),setData);
     }
   } catch(error){
     console.error(error)
   }
}

if(data.length == 0){
  return <div>Loading....</div> ;
}
  return (
    <>
      {/* {
        (openModal.status == true && <Modal title={openModal.modal} open={openModal.status} handler={setOpenModal} />)
      } */}
      <div className='container'>
                  <button className='btn btn-primary ms-auto d-block my-4 px-4' onClick={() => addUser(data[Math.floor(Math.random() * data.length)])}>Add</button>
          <div className="table-container table-responsive">
                  <table border={"1"} className='table text-center  table-dark table-striped table-bordered table-hover align-middle'>
                  <thead>
                            <tr>
                              <th rowSpan={3}>ID</th>
                              <th rowSpan={3}>NAME</th>
                              <th rowSpan={3}>USERNAME</th>
                              <th rowSpan={3}>EMAIL</th>
                              <th colSpan={6}>ADDRESS</th>
                              <th rowSpan={3}>PHONE</th>
                              <th rowSpan={3}>WEBSITE</th>
                              <th colSpan={3}>COMPANY</th>
                              <th rowSpan={3}>Update</th>
                              <th rowSpan={3}>Remove</th>
                            </tr>
                            <tr>
                              <th rowSpan={2}>STREET</th>
                              <th rowSpan={2}>SUITE</th>
                              <th rowSpan={2}>CITY</th>
                              <th rowSpan={2}>ZIPCODE</th>
                              <th  colSpan={2}>GEO </th>  
                              <th rowSpan={2}>NAME</th>
                              <th rowSpan={2}>CATCHPHRASE</th>  
                              <th rowSpan={2}>BS</th>
                            </tr>
                            <tr>
                              {/* <th></th> */}
                              <th>LAT</th>
                              <th>LNG</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            ((data !== null && data.length != 0) && data.map((value,index) => (
                              // console.log(value)
                              <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.username}</td>
                                <td>{value.email}</td>
                                <td>{value.address.street}</td>
                                <td>{value.address.suite}</td>
                                <td>{value.address.city}</td>
                                <td>{value.address.zipcode}</td>
                                <td>{value.address.geo.lat}</td>
                                <td>{value.address.geo.lng}</td>
                                <td>{value.phone}</td>
                                <td>{value.website}</td>
                                <td>{value.company.name}</td>
                                <td>{value.company.catchPhrase}</td>
                                <td>{value.company.bs}</td>
                                <td><button  onClick={() => editUser(value.id)}>Edit</button></td>
                                <td><button onClick={() => deleteUser(value.id)}>Delete</button></td>
                              </tr>
                            )))
                           }
                        </tbody>
                  </table>
          </div>
          
      </div>
    </>
  )
}

export default Table
