import React from 'react'
import { BrowserRouter, Routes  , Route } from 'react-router-dom'

import App from './App'

import Login from './components/Login'
import Shop from './components/Shop'
import Register from './components/Register'
export const Home = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
             <Route path="/" element ={<App/>}/>
            
             <Route path="/login" element={<Login/>}/> 
             <Route path="/register" element={<Register/>}/> 
             <Route path="/shop" element={<Shop/>}/> 
          </Routes>
        </BrowserRouter>
    </div>
  )
}