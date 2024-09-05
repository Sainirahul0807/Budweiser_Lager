import React from 'react'
import { motion } from 'framer-motion'

const History = () => {
  return (
        <div>
<motion.div  whileTap={{scale:0.9}}
 whileHover={{scale:1.5,backgroundColor:"black",color:"white"}}
 transition={{bounceDamping:10,bounceStiffness:600}} className='my-24 text-center font-title text-white text-6xl bg-black '>
              HISTORY...
            </motion.div>

<div className='grid grid-cols-2 my-20 '>

<div className='  object-cover  w-1/2 h-1/2 mx-36'>
              <img  src="assets/real owner.png" class="rounded-xl" alt="" />
            </div>

            <div className='flex flex-col gap-3 my-24 '>
              <h2 className='text-red-600 text-8xl'>1860</h2>
              <h4 className='text-white text-4xl'>BUILDING AN AMERICAN ICON</h4>
              <p className='text-white text-2xl'>Eberhard Anheuser purchases the Bavarian Brewery.
                 In 1864, Eberhard's son-in-law, Adolphus Busch, joins
                  the business and the two set about building what would 
                  become Anheuser-Busch.</p>
               </div>


           </div>
           <div className='grid grid-cols-2 my-20 '>

<div className='  object-cover  w-1/2 h-1/2 mx-36'>
              <img  src="assets/beer train.png" class="rounded-xl" alt="" />
            </div>

            <div className='flex flex-col gap-3 my-24 '>
              <h2 className='text-red-600 text-8xl'>1880-1901</h2>
              <h4 className='text-white text-4xl'>CROWNING A KING</h4>
              <p className='text-white text-2xl'>When Eberhard Anheuser died in 1880,
                 Adolphus became president of the Brewery. In 1901, the company broke the 1 
                 million barrels of beer sales mark for the first time, making it one of the
                 nation’s leading breweries.</p>
               </div>


           </div>





           <div className='grid grid-cols-2 my-20 '>

<div className='  object-cover  w-1/2 h-1/2 mx-36'>
              <img  src="assets/bottle collage.png" class="rounded-xl" alt="" />
            </div>

            <div className='flex flex-col gap-3 my-24 '>
              <h2 className='text-red-600 text-8xl'>1920-1933</h2>
              <h4 className='text-white text-4xl'>PROHIBITION</h4>
              <p className='text-white text-2xl'>During Prohibition, Anheuser-Busch 
                refused to shut its doors and instead shifted to the production of non-alcoholic
                 consumer products like Bevo. The majority of the company’s workers remained employed
                  during Prohibition due to diversification. </p>
               </div>


           </div>



           <div className='grid grid-cols-2 my-20 '>

<div className='  object-cover  w-1/2 h-1/2 mx-36'>
              <img  src="assets/bold ambitions.png" class="rounded-xl" alt="" />
            </div>

            <div className='flex flex-col gap-3 my-24 '>
              <h2 className='text-red-600 text-8xl'>1940s-1980s</h2>
              <h4 className='text-white text-4xl'>A BOLD AMBITION</h4>
              <p className='text-white text-2xl'> Following WWII, both America and Anheuser-Busch
                 entered a period of extraordinary growth.  A-B expanded from a single brewery in St.
                  Louis to twelve breweries spread across the country and hit the 50-million-barrel 
                  mark in 1980.  </p>
               </div>


           </div>



           
           <div className='grid grid-cols-2 my-20 '>

<div className='  object-cover  w-1/2 h-1/2 mx-36'>
              <img  src="assets/expansion.png" class="rounded-xl" alt="" />
            </div>

            <div className='flex flex-col gap-3 my-24 '>
              <h2 className='text-red-600 text-8xl'>2000s</h2>
              <h4 className='text-white text-4xl'>THE EXPANSION</h4>
              <p className='text-white text-2xl'> And that expansion only continued with the merger
                 of Anheuser-Busch and InBev, creating the largest brewer in the world. Today Budweiser
                  is brewed in 63 breweries across the globe. </p>
               </div>


           </div>
</div>



   
   
  
  )
}

export default History
