import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../features/authSlice'


const Login = () => {
  const [initialState, setInitilState] = useState({
    Email: '',
    Password: '',
  })


  const dispatch = useDispatch()



  const handleChange = (e) => {
    const {name, value} = e.target
    setInitilState({...initialState, [name]: value})

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginThunk(initialState))
  }

  return (
    <div className="signupForm">
      <div>
        <h1 className='head'>LOGIN </h1>
      </div>
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          placeholder="enter email address"
          name="Email"
          onChange={handleChange}
        />{' '}
        <br />
        <input
          type="password"
          name="Password"
          placeholder="enter password"
          onChange={handleChange}
        />{' '}
        <br />
        <div className='btn'>
          <button type="submit">Login</button>
        </div>
      </form>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Login
