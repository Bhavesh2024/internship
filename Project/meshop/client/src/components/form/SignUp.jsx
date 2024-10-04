import React, { useState } from 'react'

const SignUp = () => {

  const [formData,setFormData] = useState({
    fname:'',
    lname:'',
    dob:'',
    gender:'',
    age:0,
    address:{
      suite:'',
      street:'',
      city:'',
      state:'',
    },
    phone:'',
    username:'',
    email:'',
    password:'',
    isAgree:false,
  })

  const handleInput = (e) =>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value}) 
    if(name == 'address'){
      setFormData({...formData.address, [address.name] :value})
    }   
  }
  return (
    <div>
       <form className='flex justify-center min-h-dvh items-center p-3'>
         <fieldset className='flex flex-col gap-3 border p-5 rounded-md w-full xl:1/3 lg:1/2'>
           <legend className='text-center px-3 text-3xl font-bold'>
              Sign Up
           </legend>
           <div className="grid md:grid-cols-2 gap-4">
               <input type="text" name='fname' id='fname' value={formData.fname} placeholder='First Name' className='border px-4 py-3 rounded-md ' onChange={handleInput} required />
               <input type="text" name='lname' id='lname' value={formData.lname} placeholder='Last Name' className='border px-4 py-3 rounded-md ' onChange={handleInput} required />
           </div>
            <div className="grid grid-cols-1">

               <input type="date" name='dob' id='dob' className='border px-4 py-3 rounded-md ' value={formData.dob} onChange={handleInput} required />
            </div>
            <div className="flex justify-center items-center h-12 gap-4">
               <div className="flex gap-1">
               <input type="radio" id='male' name='gender' value={'male'} onChange={handleInput} required />
               <label htmlFor="male">Male</label>
               </div>
               <div className="flex gap-1">
               <input type="radio" id='female' name='gender' value={'female'} onChange={handleInput} required />
               <label htmlFor="female">Female</label>
               </div>
               <div className="flex gap-1">
               <input type="radio" id='other' name='gender' value={'other'} onChange={handleInput} required />
               <label htmlFor="other">Other</label>
               </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
            <input type="text" name='suite' id='suite' value={formData.address.suite} placeholder='Suite' className='border px-4 py-3 rounded-md ' onChange={handleInput} required />
            <input type="text" name='street' id='street' value={formData.address.street} placeholder='Street' className='border px-4 py-3 rounded-md ' onChange={handleInput} required />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
            <input type="text" name='city' id='city' value={formData.address.city} placeholder='City' className='border px-4 py-3 rounded-md ' onChange={handleInput} required />
            <input type="text" name='state' id='state' value={formData.address.state} placeholder='State' className='border px-4 py-3 rounded-md ' onChange={handleInput} required />
            </div>
            <div className="grid grid-cols-1">
            <input type="tel" name='phone' id='phone' value={formData.phone} placeholder='Phone Number' className='border px-4 py-3 rounded-md ' onChange={handleInput} required />
            </div>
            <div className="grid grid-cols-1">
            <input type="text" name='username' id='username' value={formData.username} placeholder='Username' className='border px-4 py-3 rounded-md ' onChange={handleInput} required />
            </div>
            <div className="grid grid-cols-1">
            <input type="email" name='useremail' id='email' value={formData.email} placeholder='Email' className='border px-4 py-3 rounded-md'onChange={handleInput} required />
            </div>
            <div className="grid grid-cols-1 relative items-center">
              <input type="password" id='password' name='password' placeholder="Password" className='border px-4 py-3 rounded-md '  onChange={handleInput} required />
               <i className="fa-solid fa-eye absolute end-0 me-2"></i>
            </div>
            <button type="submit" name='submit' className='btn bg-gray-800 w-24 py-2 rounded-md text-white m-auto'>Submit</button>
         </fieldset>
       </form>
    </div>
  )
}

export default SignUp
