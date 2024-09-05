import React from 'react'
import { motion } from 'framer-motion'

const Shop = () => {
  return (
    <div>
      <div><img src="assets/Screenshot 2024-09-03 140055.png" alt="" /></div>
      <div className='text-white font-Title  text-center text-6xl my-28'>FIND BUDWEISER PRODUCTS.</div>
        

      <div className='grid grid-cols-3 gap-64 my-5 mx-16'>
            <div className=''>
                <div classname=''><motion.img  whileTap={{scale:0.9}}
 whileHover={{scale:1.1}}
 transition={{bounceDamping:10,bounceStiffness:600}} src="assets/budwiser4.png" alt="" /></div>
                <div className='text-red-500 text-4xl font-Title py-12 font-bold '>Budweiser® Zero</div>
                <div className='text-white font-Title text-justify text-xl p-4'><p>Budweiser Zero is a non-alcoholic beer that offers the classic taste of Budweiser without the alcohol. It's crafted with the same ingredients as the original Budweiser, including barley, hops, rice, and water, but undergoes a unique brewing process to remove the alcohol.  </p></div>
            </div>
            <div>
                <div classname=''><motion.img  whileTap={{scale:0.9}}
 whileHover={{scale:1.1}}
 transition={{bounceDamping:10,bounceStiffness:600}} src="assets/budwiser5.png" alt="" /></div>
                <div className='text-red-500 text-4xl font-Title py-12 font-bold'>Budweiser®King of Beers</div>
                <div className='text-white font-Title text-justify text-xl p-4'><p>Budweiser King of Beers is a renowned beer brand known for its crisp, refreshing taste and consistent quality. It's one of the most popular beers worldwide, recognized for its distinctive golden color, subtle hop bitterness, and a touch of sweetness. </p></div>
            </div>
            <div>
                <div><motion.img  whileTap={{scale:0.9}}
 whileHover={{scale:1.1}}
 transition={{bounceDamping:10,bounceStiffness:600}} src="assets/budwiser 8.png" alt="" /></div>
                <div className='text-red-500 text-4xl font-Title py-12 font-bold'>Budweiser®Select 55</div>
                <div className='text-white font-Title text-justify text-xl p-4'><p>Budweiser Select 55 is a lower-calorie version of Budweiser, designed for those who enjoy the taste of Budweiser but are looking to reduce their calorie intake. It offers a similar flavor profile to the original Budweiser, but with fewer calories.  </p></div>
            </div>
            </div>

            <div className='grid grid-cols-3 gap-64 my-5 mx-16'>
            <div className=''>
                <div classname=''><motion.img  whileTap={{scale:0.9}}
 whileHover={{scale:1.1}}
 transition={{bounceDamping:10,bounceStiffness:600}} src="assets/buseiser 7.png" alt="" /></div>
                <div className='text-red-500 text-4xl font-Title py-24 font-bold '>Chelada Budweiser® Beer</div>
                <div className='text-white font-Title text-justify text-xl p-4'><p>Budweiser Chelada is a Mexican-style beer drink that combines Budweiser beer with a tomato-based cocktail mix. It's often seasoned with lime or lemon juice, chili powder, and salt. Cheladas are typically served chilled and are popular for their tangy and spicy flavor.  </p></div>
            </div>
            <div>
                <div classname=''><motion.img  whileTap={{scale:0.9}}
 whileHover={{scale:1.1}}
 transition={{bounceDamping:10,bounceStiffness:600}}src="assets/budwiser 6.png" alt="" /></div>
                <div className='text-red-500 text-4xl font-Title py-12 font-bold'>Budweiser Select® Light Beer</div>
                <div className='text-white font-Title text-justify text-xl p-4'><p>Budweiser Select® Light Beer is a lower-calorie version of Budweiser, offering a lighter and refreshing taste while still maintaining the brand's signature flavor profile. It's a popular choice for those who enjoy the taste of Budweiser but prefer a lower-calorie option. </p></div>
            </div>
            <div className=''>
                <div classname=''><motion.img  whileTap={{scale:0.9}}
 whileHover={{scale:1.1}}
 transition={{bounceDamping:10,bounceStiffness:600}} src="assets/budwiser4.png" alt="" /></div>
                <div className='text-red-500 text-4xl font-Title py-12 font-bold '>Budweiser® Zero</div>
                <div className='text-white font-Title text-justify text-xl p-4'><p>Budweiser Zero is a non-alcoholic beer that offers the classic taste of Budweiser without the alcohol. It's crafted with the same ingredients as the original Budweiser, including barley, hops, rice, and water, but undergoes a unique brewing process to remove the alcohol.  </p></div>
            </div>
            </div>
            <div className=' grid items-center text-center text-white grid-cols-3 p-32'>
            <hr class="border-white"/>
          <p class=" text-white text-xl">COPYRIGHT@2024</p>
            <hr class="border-white"/>
          </div>



    </div>
  )
}

export default Shop
