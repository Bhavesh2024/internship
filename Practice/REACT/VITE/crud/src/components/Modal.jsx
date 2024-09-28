import React, { useContext } from 'react'
import Form from './Form'
import DataContext from '../context/DataContext'
const UpdateModal = ({id}) =>{
    return <>
      {/* <Form title={"update"} data={data} handler={(myData)}/> */}
    </>  
}

const DeleteModal = ({id}) =>{
   return (
    <>
      <div>
         Are You Sure to Delete ?
      </div>
      <div className="buttons">
          <button>Yes</button>
          <button>No</button>
      </div>
    </>
   )
}
const Modal = ({id,title}) => {
  console.log(title)
  const {userData,setUserData} = useContext(DataContext)
  console.log(userData)
  return (
    <>
        <div>
           {title != 'update' ? <DeleteModal id={id}  /> : <UpdateModal id={id} />}
        </div>
    </>
  )
}

export default Modal
