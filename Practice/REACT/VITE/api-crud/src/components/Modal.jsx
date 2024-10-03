import React from 'react'
import { Children } from 'react'
import ReactDOM from 'react-dom'
const Modal = (props) => {

  const closeModal = () =>{
    const handler = props.hanlder;
    handler({...props.open,status:false})
  }
 return ReactDOM.createPortal(<><div className='modal'>
    <div className="modal-header">
        <h3>{props.title}</h3>
        <i className="btn-close" onClick={closeModal}></i>
    </div>
    <div className="modal-body">
        {props.component}
    </div>

  </div> </>,document.getElementById('root'));
}

export default Modal
