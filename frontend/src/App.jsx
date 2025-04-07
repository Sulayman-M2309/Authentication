import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
const router = createBrowserRouter(
  createRoutesFromElements(<>
  
  <Route path='/signup' element={<Signup></Signup>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
  </>)
);
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App