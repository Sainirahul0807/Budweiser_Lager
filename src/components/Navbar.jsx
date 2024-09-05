// import React from 'react'
// import {  useNavigate } from 'react-router-dom'



// const Navbar = () => {
//   const navigate = useNavigate()
//   function handle(){
//     navigate('/register')
//      }
//      function handle2(){
//        navigate('/login')
//    }
//   return (
    
//     <div className='flex  justify-between overlap bg-black  py-0'>
//       <div className='justify between font-bold text-xl bg-black px-4 py-1 text-white '>
//         <img  className='w-38 h-16 py-2' src="/src/assets/new logo.png"  />
//       </div>
//       <div className='bg-black flex text-white py-4 justify-between gap-9 px-8 font-sans text-xl '>
//       <div onClick={handle2} className='bg-black '><button>LOGIN</button></div>
//       <div onClick={handle} className='bg-black '><button>SIGN UP</button></div>
//             </div>
//     </div>
   
//   )
// }

// export default Navbar
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  function handle() {
    navigate('/register');
  }

  function handle2() {
    navigate('/login');
  }

  return (
    <div className="flex justify-between overlap bg-black py-0">
      <div className="justify-between font-bold text-xl bg-black px-5 py-3 text-white">
        <motion.img  whileTap={{scale:0.9}}
 whileHover={{scale:1.2}}
 transition={{bounceDamping:10,bounceStiffness:600}} className="w-38 h-24 py-2" src="assets/new logo.png" alt="Logo" />
      </div>
      <div className="bg-black flex text-white py-4 justify-between gap-14 px-8 font-sans text-xl">
        <motion.button onClick={handle2}  whileTap={{scale:0.9}}
 whileHover={{scale:1.5,backgroundColor:"black",color:"white"}}
 transition={{bounceDamping:10,bounceStiffness:600}} className='text-2xl font-Title '>LOGIN</motion.button>
        <motion.button onClick={handle}  whileTap={{scale:0.9}}
 whileHover={{scale:1.5,backgroundColor:"black",color:"white"}}
 transition={{bounceDamping:10,bounceStiffness:600}} className='text-2xl font-Title '>SIGN UP</motion.button>
      </div>
    </div>
  );
};

export default Navbar;