import React from 'react'
import { motion } from 'framer-motion'

const Login = () => {
  return (
    <div className='bg-black min-h-screen justify-center items-center p-11'>
      <div className=" flex rounded-3xl border-red-300 border-2">
        <div className='w-1/2 p-32 '>
        <h2 className='text-5xl text-center text-white '>LOGIN</h2>
        <form action="" class="flex flex-col gap-14 p-10 my-12 " >
          <input type="text" class="p-2 rounded-xl border text-white " name="Email Address" placeholder='Email' />
          <input type="password" class="p-2 rounded-xl border text-white" name="Password" placeholder ="Password"/>
          <motion.button whileTap={{scale:0.9}}
 whileHover={{scale:1.1,backgroundColor:"white",color:"red"}}
 transition={{bounceDamping:10,bounceStiffness:600}} className='rounded-xl text-white bg-red-600 w-48 h-10 mx-44 font-Title text-xl'>LOG IN</motion.button>
          <div className=' grid items-center text-center text-white grid-cols-3'>
            <hr class="border-white "/>
          <p class=" text-white text-xl">OR</p>
            <hr class="border-white"/>
          </div>
          <motion.button whileTap={{scale:0.9}}
 whileHover={{scale:1.1,backgroundColor:"white",color:"red"}}
 transition={{bounceDamping:10,bounceStiffness:600}} className='rounded-xl text-white bg-red-600 w-48 h-10 mx-44 font-Title text-xl'>STAY SIGN OUT</motion.button>

        </form>
        
        </div>
        <div className='w-1/2 p-24'><img src="assets/expansion.png" class="rounded-3xl" alt="" /></div>
      </div>
    
    </div>
  )
}

export default Login
