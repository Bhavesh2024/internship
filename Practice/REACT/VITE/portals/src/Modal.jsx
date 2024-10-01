import React from 'react'
import ReactDOM from 'react-dom'
const Modal = ({children,open,onClose}) => {
  return (open && ReactDOM.createPortal(<div className='modal' style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100vh',border:'1px solid',padding:'0'}}>
        <div className="modal-content" style={{position:'relative',border:'1px solid',width:'fit-content'}}>
    <i className="close" onClick={() => onClose(false)} style={{fontSize:"1.5rem",position:'absolute',top:'0',right:'0'}}>&times;</i>
    <div className="modal-body">
           {children}
    </div>
        </div>
  </div>,document.getElementById('root'))
  )
}

export default Modal
