import React from 'react'
const updateForm = ({id,}) =>{
   return <>
    <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Update Form</legend>
          <div className='form-group'>
            <input type="number" className="form-input" name='id' value={id} onChange={handleInput} required />
          </div>
          <div className='form-group'>
            <input type="text" className="form-input" name='fullname' placeholder="Full Name" value={formData.fullname} onChange={handleInput} required />
          </div>
          <div className='form-group'>
            <input type="tel" className="form-input" name='phone' placeholder="Phone Number" value={formData.phone} onChange={handleInput} required />
          </div>
          <div className='form-group'>
            <input type="email" className="form-input" name='email' placeholder="Email" value={formData.email} onChange={handleInput} required />
          </div>
          <div className='form-group'>
            <input type="password" className="form-input" name='password' placeholder="Password" value={formData.password} onChange={handleInput} required />
          </div>
          <div>
            <button type="submit" className='submit'>Submit</button>
          </div>
        </fieldset>
      </form>
   
   </>
}
const Modal = () => {
  return (
    <div>

    </div>
  )
}

export default Modal
