import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./style/style.css"
function App() {

  const courses = ['B.COM','B.C.A','B.B.A','B.A.','M.COM','M.SC','M.C.A','M.A.'];
  const gender = ['male','female','other']

  const [data,setData] = useState({
    image:"",
    fname:"",
    lname:"",
    dob:"",
    gender:"",
    course:"",
    phone:"",
    email:"",
    password:"",
    address:"",
    description:"",
  });
  

  // Handler Functions
  const handleInput = (e) =>{
    const {name,value} = e.target;
    setData({...data,[name]:value})
  }

  const handleSubmit = () =>{

  }
  return (
    <>
      <form action="">
         <fieldset>
             <legend>
               Register
             </legend>
             
            <div className='row'>
              <div className="col">
                <input type="text" name='fname' id='fname' placeholder='First Name' className='form-input' value={data.fname} onChange={handleInput} />
              </div>
              <div className="col">
                <input type="text" name='lname' id='lname' placeholder='Last Name' className='form-input' value={data.lname} onChange={handleInput} />
              </div>
            </div>
            <div className="row">
            <input type="date" name='dob' id='dob' className='form-input' value={data.dob} onChange={handleInput} />
            </div>
            <div className="row gender">
                {
                  gender.map((value)=>(
                    <div className='radio-group'>
                      <input type="radio" name="gender" id={value} className='form-radio' value={value} />
                      <label htmlFor="">{value}</label>
                    </div>
                  ))
                }
            </div>
            <div className="row">
             <select name="course" className='form-input' id="course">
                {
                  courses.map((value)=>(
                    <option value={value}>{value}</option>
                  ))
                }
             </select>
            </div>
            <div className="row">
            <input type="tel" name='phone' id='phone' placeholder='Phone Number' className='form-input' value={data.phone} onChange={handleInput} />
            </div>
            <div className="row">
            <input type="email" name='email' id='email' placeholder='Email' className='form-input' value={data.email} onChange={handleInput} />
            </div>
            <div className="row">
            <input type="password" name='password' id='password' placeholder='Password' className='form-input' value={data.password} onChange={handleInput} />
            </div>
            <div className="row">
              <textarea name='description' id="description" className='form-input' value={data.description} placeholder='Write Something about your self' rows={5}></textarea>
            </div>
            <div className="row">
              <button type='submit' className='submit'>Submit</button>
            </div>
         </fieldset>
      </form>
    </>
  )
}

export default App
