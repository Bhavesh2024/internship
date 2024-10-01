import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Modal';
function App() {
  const [isOpen,setOpen] = useState(false);
  return (
    <>
      <div className="parent" id='parent' style={{border:"1px solid"}}>
      <Modal open={isOpen} onClose={setOpen}>
        <h5>Hello World</h5>
      </Modal>
      <button onClick={() => setOpen(!isOpen)}>Open Modal</button>
      </div>
    </>
  )
}

export default App
