import React from 'react'
import { Login, Main, Signup } from './pages'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Navbar } from './component'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Main />} />
        <Route path='register' element={<Signup />} />
        <Route path='login' element={<Login />} />
      </Route>,
    ),
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
