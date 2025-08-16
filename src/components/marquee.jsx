import React from 'react'
import {motion} from 'framer-motion'

function marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className = "w-full bg-[#004D43] py-20 rounded-tl-3xl rounded-tr-3xl">
{/* whitespace-nowrap // isse element aghe var jaega */}
        <div className = "text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden items-center"> 
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='text-[14vw] leading-none font-semibold -mb-1 pb-5 pr-20'>WE ARE OOCHI</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='text-[14vw] leading-none font-semibold -mb-1 pb-5 pr-20'>WE ARE OOCHI</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='text-[14vw] leading-none font-semibold -mb-1 pb-5 pr-20'>WE ARE OOCHI</motion.h1>
        </div>


    </div>
  )
}

export default marquee
