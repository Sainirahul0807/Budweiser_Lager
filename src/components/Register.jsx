import React from 'react'
import { motion } from 'framer-motion'

const Register = () => {
  return (
    <div className='bg-black min-h-screen justify-center items-center p-11'>
      <div className=" flex rounded-3xl border-2">
        <div className='w-1/2 p-32 py-52'>
        <h2 className='text-5xl text-center text-white '>SIGN UP</h2>
        <form action="" class="flex flex-col gap-14 p-10 my-12 " >
          <input type="text" class="p-2 rounded-xl border text-white " name="Full Name" placeholder='Full Name' />
          <input type="text" class="p-2 rounded-xl border text-white" name="Email Address" placeholder ="Email"/>
          <input type="text" class="p-2 rounded-xl border text-white" name="Phone NO." placeholder ="Phone no."/>


          <motion.button whileTap={{scale:0.9}}
 whileHover={{scale:1.1,backgroundColor:"white",color:"red"}}
 transition={{bounceDamping:10,bounceStiffness:600}} className='rounded-xl text-white bg-red-600 w-48 h-14 mx-44 font-Title text-xl'>REGISTER</motion.button>
         

        </form>
        
        </div>
        <div className='w-1/2 p-24'><img src="assets/register side.jpg" class="rounded-3xl" alt="" /></div>
      </div>
    
    </div>
  )
}

export default Register
