// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//           <div className='my-28'><img src="/src/assets/Screenshot 2024-09-03 140055.png" alt="" /></div>
//       <div className='text-white font-Title  text-center text-8xl my-16'>Let's Be Buds</div>
//       <div className='text-center my-8'>
//         <div className='text-white font-Title font-bold text-center text-xl'>Copyright 2024.</div>
    
//       </div>
    
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div>
      <div className="my-28">
        <img src="assets/Screenshot 2024-09-03 140055.png" alt="" />
      </div>
      <motion.div  whileTap={{scale:0.9}}
 whileHover={{scale:1.5,backgroundColor:"black",color:"white"}}
 transition={{bounceDamping:10,bounceStiffness:600}} className="text-white font-Title text-center">
        <h1 className="text-8xl md:text-6xl lg:text-8xl">Let's Be Buds</h1>
      </motion.div>
      <div className="text-center my-8">
        <p className="text-white font-Title font-bold text-xl md:text-2xl lg:text-3xl">
          Copyright 2024.
        </p>
      </div>
    </div>
  );
};

export default Footer;