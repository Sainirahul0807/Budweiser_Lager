import React from 'react'
import Header from './components/Header'
import Navbar from "./components/Navbar"
import History from './components/History'
import Legacy from './components/Legacy'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Shop from './components/Shop'

export default function App() {
  return (
  <div>
     <Navbar/>
    <Header/>
<History/>  
<Legacy/> 
<Footer/>


  </div>
  )
}