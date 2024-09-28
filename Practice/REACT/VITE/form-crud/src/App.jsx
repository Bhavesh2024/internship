import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: 0,
    fullname: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullname && formData.phone && formData.email && formData.password) {
      setCount(count + 1);
      setData((prevData) => [...prevData, { ...formData, id: count + 1 }]); // Use count + 1 for ID
      setFormData({ id: 0, fullname: '', phone: '', email: '', password: '' }); // Reset form
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Sign Up</legend>
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

      {count > 0 && (
        <div style={{overflow:'auto'}}>
        <table>
          <thead style={{textWrap:'nowrap'}}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody style={{textWrap:'nowrap'}}>
            {data.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.fullname}</td>
                <td>{value.phone}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
                <td><button onClick="openUpdateModal">Update</button></td>
                <td><button onClick="openDeleteModal">Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </>
  );
}

export default App;
