import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../features/authSlice'


const Signup = () => {
  const [initialState, setInitilState] = useState({
    FirstName: '',
    LastName: '',
    Email: "",
    Password: '',
  })


  const dispatch = useDispatch()



  const handleChange = (e) => {
    const {name, value} = e.target
    setInitilState({...initialState, [name]: value})



  }


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerThunk(initialState))
  }

  return (
    <div className="signupForm">
      <div>
        <h1 className='head'>Sign Up </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter first name"
          name="FirstName"
          onChange={handleChange}
        />{' '}
        <br />
        <input
          type="text"
          placeholder="enter last name"
          name="LastName"
          onChange={handleChange}
        />{' '}
        <br />
        <input
          type="email"
          placeholder="enter email"
          name="Email"
          onChange={handleChange}
        />{' '}
        <br />
        <input
          type="password"
          name="Password"
          id="Password"
          placeholder="enter password"
          onChange={handleChange}
        />{' '}
        <br />
        <div className='btn'>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Signup
