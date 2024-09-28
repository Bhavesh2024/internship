import React, { useContext } from 'react'
import Table from './Table';
import DataContext from '../context/DataContext';
import { useState } from 'react';

const Form = ({title,data,handler}) => {
 
  const placeholders = ['User Id','Full Name','Phone Number','Email','Password'];
  const fields = ['id','name','phone','email','password'];
  const {userData,setUserData} = useContext(DataContext);
  const [count,setCount] = useState(0);
  const handleInput = (e) =>{
    const {name,value} = e.target;
    handler((prevData) => ({...prevData,[name] : value}))
  }

  // insertData(placeholders,0,'date');
  const handleUpdate = (e) =>{
     e.preventDefault();

     console.log('update Handler')
  }

  const handleSubmit = (e) =>{
     e.preventDefault();
      if(data.name && data.phone && data.email && data.password){
        setCount(count => count + 1);
        setUserData((prevData) => ([...prevData,{...data,id:prevData.length + 1 }]))
        handler({id:0,name:'',phone:'',email:"",password:""})
      }
    
  }
   console.log(title.match('update'))
   console.log(title.match('register'))
  return (
    <>
       <form action="" onSubmit={title.match('update') ? handleUpdate : handleSubmit  }>
        <fieldset>
          <legend>
            {title}
          </legend>
          {
            (fields.map((value,index)=>(
              <>
              <div className="form-group">
                {
                (title.match('update')  && index == 0) ? <input type='number' id={value} name={value} placeholder={placeholders[index]} value={data.id} disabled /> : <input type='hidden' />}
                {
                  index != 0 ?
                (index >= 2) ? <input type={value} id={value} name={value} placeholder={placeholders[index]} value={data[value]} onChange={handleInput}/> : <input type={'text'} id={value} name={value} placeholder={placeholders[index]} value={data[value]}  onChange={handleInput}/> : ""
                } 
              </div>
              </>
            )))
          }
          <div className="buttons">
             <button type='submit' name='submit' className="submit">Submit</button>
          </div>
        </fieldset>

       </form>
       {
       ( (!title.match('update') && count > 0) &&
       <Table  data={userData} handler={setUserData} />
       )
       }
    </>
  )
}

export default Form
