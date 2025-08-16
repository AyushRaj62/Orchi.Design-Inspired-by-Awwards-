import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion }  from "framer-motion"

function landingPage() {
  
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='textStructure mt-52 px-20 font-["Founders_Grotesk_X-Condensed"]'>

        {["We Create", "Eye Opening", "Presentations"].map((item, index)=>
        { return    <div className='Masker'>  
                        <div className = "w-fit flex items-center">
                            
                            {index === 1 && (
                                <motion.img
                                initial={{width: 0}}
                                animate={{width: "8vw"}}
                                transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                                src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                                alt="decor"
                                className="mr-2 w-[5.5vw] h-[5vw] rounded-md object-cover"
                              />
                              )}
                            <h1 className = "uppercase text-[5.5vw] leading-[5vw] font-bold tracking-tighter font-['Founders_Grotesk_X-Condensed'] ">{item}</h1>
                        </div>
                    </div>
        })}

        </div>

        <div className="border-t-[1px] border-zinc-800 mt-40 flex justify-between items-center py-5 px-20">
            <div className="flex gap-x-80">
                {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item, index)=>(
                    <p key={index} className = "text-md font-light tracking-tight leading-none">{item}</p>
                ))}
            </div> 

            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-lg capitalize rounded-full'>START THE PROJECT</div>
                <div className='w-9 h-9  rounded-full flex items-center justify-center border-[1px] border-zinc-400'> 
                    <span className='rotate-[45deg]'><FaArrowUpLong /></span>
                </div>
            </div>
        </div>
    </div>
  )             
}

export default landingPage
