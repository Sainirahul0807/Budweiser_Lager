import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  function handleshop(){
    navigate('/shop')
     }
  return (
<div>
<div classname=' h-64 w-full bg-inherit bg-center p-96 relative'>
  <img src="assets/1725264993665.jpg" alt="" />
</div>
<div className='justify-center items-center text-center p-0 m-0 text-white text-7xl bg-black font-Title   '>
            <h class="text-white m-16">
           ROYAL DRINKs FOR ROYAL MEN.
       </h>
            </div>       
<div className='flex justify-center items-center my-16'>
<motion.button onClick={handleshop} whileTap={{scale:0.9}}
 whileHover={{scale:1.1,backgroundColor:"white",color:"red",shadow:"white"}}
 transition={{bounceDamping:10,bounceStiffness:600}} 
 className='rounded-xl text-white bg-red-600 w-60 h-24 text-2xl font-Title  p-4  '>FIND YOUR BUD</motion.button>

</div>
</div>

  )
}

export default Header
