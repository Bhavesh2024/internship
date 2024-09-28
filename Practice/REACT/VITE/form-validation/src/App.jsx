import { useState, useEffect } from 'react';
import './App.css';
import './style/style.css';
import  SweetAlert2 from "react-sweetalert2"
function App() {
  const courses = ['B.COM', 'B.C.A', 'B.B.A', 'B.A.', 'M.COM', 'M.SC', 'M.C.A', 'M.A.'];
  const gender = ['male', 'female', 'other'];

  const [data, setData] = useState({
    image: "",
    fname: "",
    lname: "",
    dob: "",
    gender: "",
    course: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    description: "",
  });

  const [isValid, setIsValid] = useState(false);
  const [inputValidity, setInputValidity] = useState({
    fname: null,
    lname: null,
    dob: null,
    phone: null,
    email: null,
    password: null,
    gender: true, // No validation required
    course: true, // No validation required
    description: true, // No validation required
  });

  const [swalProps,setSwalProps] = useState({})
  const validateInput = (name, value) => {
    const patterns = {
      fname: /^[A-Za-z]+$/,
      lname: /^[A-Za-z]+$/,
      phone: /^\d{10}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/,
    };
    
    return (name == 'dob') ? validateAge(value) : patterns[name] ? patterns[name].test(value) : true; // Assume valid for non-validated fields
  };

  const validateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    const diff = today.getFullYear() - birthDate.getFullYear();
    return diff >= 18;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    const isFieldValid = validateInput(name, value);
    setInputValidity((prev) => ({ ...prev, [name]: isFieldValid }));
  };

  useEffect(() => {
    const allValid = Object.keys(data).every((key) => 
      key in inputValidity ? inputValidity[key] : true // Check inputValidity for validation
    );
    setIsValid(allValid);
  }, [data, inputValidity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('hi')
    setSwalProps({
      show:true,
      title:"Congratulations !! You are Registered Successfully",
      text:`Thanks, ${data.fname.toUpperCase()+" "+data.lname.toUpperCase()} for submitting a form`,
      icon:"success"
    })
    // Handle form submission logic here
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Register</legend>
          <div className='row'>
            <div className="col">
              <input
                type="text"
                name='fname'
                id='fname'
                placeholder='First Name'
                className='form-input'
                value={data.fname}
                onChange={handleInput}
                style={{ borderColor: inputValidity.fname === false ? 'red' : inputValidity.fname === true ? 'green' : '' }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                name='lname'
                id='lname'
                placeholder='Last Name'
                className='form-input'
                value={data.lname}
                onChange={handleInput}
                style={{ borderColor: inputValidity.lname === false ? 'red' : inputValidity.lname === true ? 'green' : '' }}
              />
            </div>
          </div>
          <div className="row">
            <input
              type="date"
              name='dob'
              id='dob'
              className='form-input'
              value={data.dob}
              onChange={handleInput}
              style={{ borderColor: inputValidity.dob === false ? 'red' : inputValidity.dob === true ? 'green' : '' }}
            />
          </div>
          <div className="row gender">
            {gender.map((value) => (
              <div className='radio-group' key={value}>
                <input
                  type="radio"
                  name="gender"
                  id={value}
                  className='form-radio'
                  value={value}
                  onChange={handleInput}
                  onClick={() => setInputValidity((prev) => ({ ...prev, gender: true }))} // Mark as valid when selected
                />
                <label htmlFor={value}>{value}</label>
              </div>
            ))}
          </div>
          <div className="row">
            <select
              name="course"
              className='form-input'
              id="course"
              onChange={handleInput}
              onBlur={() => setInputValidity((prev) => ({ ...prev, course: true }))} // Mark as valid on blur
              // style={{ borderColor: inputValidity.course === false ? 'red' : inputValidity.course === true ? 'green' : '' }}
            >
              {courses.map((value) => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="row">
            <input
              type="tel"
              name='phone'
              id='phone'
              placeholder='Phone Number'
              className='form-input'
              value={data.phone}
              onChange={handleInput}
              style={{ borderColor: inputValidity.phone === false ? 'red' : inputValidity.phone === true ? 'green' : '' }}
            />
          </div>
          <div className="row">
            <input
              type="email"
              name='email'
              id='email'
              placeholder='Email'
              className='form-input'
              value={data.email}
              onChange={handleInput}
              style={{ borderColor: inputValidity.email === false ? 'red' : inputValidity.email === true ? 'green' : '' }}
            />
          </div>
          <div className="row">
            <input
              type="password"
              name='password'
              id='password'
              placeholder='Password'
              className='form-input'
              value={data.password}
              onChange={handleInput}
              style={{ borderColor: inputValidity.password === false ? 'red' : inputValidity.password === true ? 'green' : '' }}
            />
          </div>
          <div className="row">
            <textarea
              name='description'
              id="description"
              className='form-input'
              value={data.description}
              onChange={handleInput}
              placeholder='Write Something about yourself'
              rows={5}
              // style={{ borderColor: inputValidity.description === false ? 'red' : inputValidity.description === true ? 'green' : '' }}
            ></textarea>
          </div>
          <div className="row">
            <button type='submit' id='submit' name='submit' className='submit' disabled={!isValid}>Submit</button>
          </div>
        </fieldset>
      </form>
      <SweetAlert2 {...swalProps}/>
    </>
  );
}

export default App;
