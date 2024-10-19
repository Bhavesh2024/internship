import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from "../modal/Modal";
import Success from '../modal/Success'
import Error from '../modal/Error'
const Account = () => {

  const {username} = useParams();
  const [data,setData] = useState({
    username:'',
    address:{
      suite:'',
      street:'',
      city:'',
      state:'',
    },
    password:'',
  })
  const [address,setAddress] = useState({
    suite:'',
    street:'',
    city:'',
    state:''
  })

  const [togglePassword,setTogglePassword] = useState(false);
  const [isSubmit,setSubmit] = useState(false);
  const [openModal,setOpenModal] = useState(false);
  const [message,setMessage] = useState({
    error:false,
    success:false,
    text:''
  })
  const addressKeys = ['suite','street','city','state'];
  const handleInput = (e) =>{
      const {name,value} = e.target;
      
      if(addressKeys.includes(name)){
        setAddress({...address,[name]:value});
      } else{
        setData({...data,[name]:value});
      }
  }
  const handleSubmit = (e) =>{
      e.preventDefault();

      const updateData = {...data,address};
      console.log(updateData);
      setData(updateData);
      updateUser(username,updateData);
      // if(setData({...data,address:address})){

      //   console.log(data);
      //   setSubmit(!isSubmit)
      // }
  }

  
  const fetchUser = async(username) =>{
      try{
        const response = await axios.get(`http://localhost:5000/api/users/${username}`);

        if(response.status == 200){
           setData(response.data);
           setAddress(response.data.address);
        }
      }catch(error){
        setOpenModal(!openModal);
        setMessage({...message,error:true,status:true,text:error.response.data.message})
      }
  }

  const updateUser = async(username,userData) =>{
    try{
      const response = await axios.put(`http://localhost:5000/api/users/${username}`,userData);

      if(response.status == 200){
        //  setData(response.data);
        //  setAddress(response.data.address);
        console.log(response.data);
        if(username !== data.username){
          localStorage.setItem('user',data.username);
        }
        setOpenModal(!openModal);
      setMessage({...message,text:response.data.message,success:true})
      }
    }catch(error){
      console.log(error);
        setOpenModal(!openModal);
        setMessage({...message,error:true,status:true,text:error.response.data.message})
    }
  }
  useEffect(() => {
    if(username !== ''){
        fetchUser(username);
    }
  },[])


  // useEffect(() =>{
  //    if(isSubmit){
  //      updateUser(username);
  //      setSubmit(!isSubmit);
  //    }
  // },[isSubmit])

  if(!data) return <div>Loading....</div>
  return (
    <div>
       <form action="" onSubmit={handleSubmit} className='w-full p-3 flex items-center justify-center'>
         <fieldset className='w-full md:w-2/3 xl:w-2/5 border p-4 rounded-md'>
           <legend className='text-center text-2xl font-bold px-4'>Account</legend>
           <div>
            <input type="text" name='username' id='username' className='p-2 border rounded-sm w-full' placeholder='Username' onChange={handleInput} value={data.username} required  />
           </div>
           <div className='grid grid-cols-2 gap-2'>
               <div className='my-2'>
               <input type="text" name='suite' id='suite' className='p-2 border rounded-sm w-full my-1' placeholder='Suite' onChange={handleInput} value={address.suite} required  />            
               <input type="text" name='street' id='street' className='p-2 border rounded-sm w-full my-1' placeholder='Street' onChange={handleInput} value={address.street} required  />
               </div>
               <div className='my-2'>
               <input type="text" name='city' id='city' className='p-2 border rounded-sm w-full my-1' placeholder='City' onChange={handleInput} value={address.city} required  />
               <input type="text" name='state' id='state' className='p-2 border rounded-sm w-full my-1' placeholder='State' onChange={handleInput} value={address.state} required  />
               </div>
           </div>
           <div>
             <div className='border rounded-sm flex items-center'>
             <input type={togglePassword ? 'text' : 'password'} name='password' className='w-full focus:outline-none p-2' id='password' placeholder='Password' onChange={handleInput} value={data.password} required  />
              <i className={`fa-solid ${togglePassword ? 'fa-eye': 'fa-eye-slash'} me-2`} onClick={() => setTogglePassword(!togglePassword)}></i>
             </div>
           </div>
           <div className='mt-3'>
             <button type="submit" name='submit' className='bg-slate-900 rounded-md p-2 text-gray-100 px-4 flex m-auto'>Submit</button>
           </div>
         </fieldset>
       </form>
       {
       openModal &&
       <Modal open={openModal} onClose={setOpenModal}>
                {
                  !message.error ? <Success message={message.text} onClose={setOpenModal} handler={setMessage} redirect={'/'}/> : <Error handler={setMessage} onClose={setOpenModal} message={message.text} />
                }
       </Modal>
       }
    </div>
  )
}

export default Account
