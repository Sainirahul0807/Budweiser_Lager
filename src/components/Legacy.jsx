// import React from 'react'

// const Legacy = () => {
//   return (
//     <div>
//        <div className='py-16 px-20 flex justify-start font-title text-white text-6xl bg-black '>
//               LEGACY...
//             </div>
//             <div>

//             <div className='grid grid-cols-2  '>

// <div className=' w-full object-cover px-24 py-36'p>
//               <img  src="/src/assets/real owner.png" class="rounded-xl" alt="" />
//             </div>

//             <div className='flex flex-col  px-36 py-32 gap-10 '>
//               <h4 className='text-red-600 text-4xl'>Our Legacy</h4>
             
//               <div className='text-white text-2xl gap-5'><li>Our founder, Adolphus Busch, journeyed to America from Germany in 1857, determined to make his dreams come true.</li>
//                 <li className='py-2'>After fighting for the Union during the Civil War, Adolphus joined his father-in-law's business, bringing big, ambitious ideas with him.</li>
//                 <li className='py-2'>In 1879, the company's name was officially changed to Anheuser-Busch Brewing Association. After Eberhard's passing in 1880, Adolphus became president</li>
//                 <li className='py-2'>Before Budweiser was introduced, many Americans were drinking heavy, dark ales. But St. Louis summers were hot - perfect for a palatable, crisp lager.</li>
//                 <li className='py-2'>Budweiser's smoothness and drinkability were a success. Budweiser quickly became wildly popular not just in St. Louis but in America. And we've stayed true to the recipe ever since.</li></div>
              
//             </div>


//            </div>

//            <div className='grid grid-cols-2  '>

// <div className=' w-full object-cover px-24  py-8'>
//               <video src="/src/assets/budwiser vdo.mp4" class="rounded-xl" if autoPlay loop muted></video>
//             </div>

//             <div className='flex flex-col  px-36 py-8 gap-10 '>
//               <h4 className='text-red-600 text-4xl'>Our Farmers</h4>
//               <p className='text-white text-2xl'>
//                 <li>Nearly 100% of our barley comes from America’s farmers.</li>
//                 <li>We’re investing billions in cutting-edge innovations.</li>
//                 <li>We are working hand-in-hand with American farmers to raise the next generation of barley.</li>
//               </p>
              
//             </div>


//            </div>
//             </div>

//     </div>
//   )
// }

// export default Legacy


import React from 'react';
import { motion } from 'framer-motion';

const Legacy = () => {
  return (
    <div>
      <motion.div whileTap={{scale:0.9}}
 whileHover={{scale:1.5,backgroundColor:"black",color:"white"}}
 transition={{bounceDamping:10,bounceStiffness:600}} className=" justify-centre font-title text-white bg-black py-16 text-center">
        <h1 className="text-6xl">LEGACY...</h1>
      </motion.div >

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="w-full object-cover px-24 py-36">
          <img src="assets/real owner.png" className="rounded-xl" alt="" />
        </div>
        <div className="flex flex-col px-36 py-32 gap-10">
          <h4 className="text-red-600 text-4xl md:text-6xl ">Our Legacy</h4>
          <ul className="text-white text-2xl md:text-3xl gap-5">
            <li>
              Our founder, Adolphus Busch, journeyed to America from Germany in 1857,
              determined to make his dreams come true.
            </li>
            <li className="py-2">
              After fighting for the Union during the Civil War, Adolphus joined his
              father-in-law's business, bringing big, ambitious ideas with him.
            </li>
            <li className="py-2">
              In 1879, the company's name was officially changed to Anheuser-Busch Brewing
              Association. After Eberhard's passing in 1880, Adolphus became president.
            </li>
            <li className="py-2">
              Before Budweiser was introduced, many Americans were drinking heavy, dark ales.
              But St. Louis summers were hot - perfect for a palatable, crisp lager.
            </li>
            <li className="py-2">
              Budweiser's smoothness and drinkability were a success. Budweiser quickly became
              wildly popular not just in St. Louis but in America. And we've stayed true to the
              recipe ever since.
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="w-full object-cover px-24 py-8">
          <video src="assets/budwiser vdo.mp4" className="rounded-xl" autoPlay loop muted ></video>
        </div>
        <div className="flex flex-col px-36 py-8 gap-10">
          <h4 className="text-red-600 text-4xl md:text-6xl">Our Farmers</h4>
          <p className="text-white text-2xl md:text-3xl">
            <li>Nearly 100% of our barley comes from America's farmers.</li>
            <li>We're investing billions in cutting-edge innovations.</li>
            <li>
              We are working hand-in-hand with American farmers to raise the next
              generation of barley.
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legacy;