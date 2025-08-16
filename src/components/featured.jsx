import React from 'react'
import { motion, useAnimation }  from "framer-motion"

function featured() {

  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({y : "0"})
  }
  
  const handleHoverEnd = (index) => {
    cards[index].start({y : "100%"})
  }

  return (
    <div className='w-full py-20'>
      <div className='w-full px-16 border-b-[1px] border-zinc-700 pb-12'>
        <h1 className='text-6xl tracking-tight'>Featured Projects</h1>
      </div>

      <div className='px-20 pt-28'>
          <div className='cards w-ful flex gap-10'>
   
                <motion.div 
                onHoverStart={()=>handleHover(0)}
                onHoverEnd={() => handleHoverEnd(0)}
                className='cardContainer relative w-1/2 h-[75vh]'>
                
                  <h1 className='absolute flex overflow-hidden text-[#CDEA68] whitespace-nowrap right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold leading-none tracking-tighter '>
                      {"SALIENCE LABS".split('').map((item, index) => (
                        <motion.span 
                        initial={{y: "100%"}}
                         animate={cards[0]} 
                         transition = {{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                         className='inline-block'>{item}</motion.span>
                      ))}
                  </h1>

                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                      <img className = "w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                    </div>
                
                </motion.div>

                <motion.div 
                onHoverStart={()=>handleHover(1)}
                onHoverEnd={() => handleHoverEnd(1)}
                className='cardContainer relative w-1/2 h-[75vh]'>

                <h1 className='absolute flex overflow-hidden text-[#CDEA68] whitespace-nowrap right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold leading-none tracking-tighter '>
                {"SOMA".split('').map((item, index) => (
                      <motion.span 
                      initial={{y: "100%"}}
                       animate={cards[1]} 
                       transition = {{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                       className='inline-block'>{item}</motion.span>
                    ))}
                </h1>

                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                      <img className = "w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2025/08/Soma_Website_0-1.png" alt="" />
                    </div>
                </motion.div>
          </div>
      </div>

      <div className='px-20 pt-28'>
          <div className='cards w-ful flex gap-10'>
   
                <motion.div 
                onHoverStart={()=>handleHover(2)}
                onHoverEnd={() => handleHoverEnd(2)}
                className='cardContainer relative w-1/2 h-[75vh]'>
                
                  <h1 className='absolute flex overflow-hidden text-[#CDEA68] whitespace-nowrap right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold leading-none tracking-tighter '>
                      {"SOFTSTART".split('').map((item, index) => (
                        <motion.span 
                        initial={{y: "100%"}}
                         animate={cards[2]} 
                         transition = {{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                         className='inline-block'>{item}</motion.span>
                      ))}
                  </h1>

                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                      <img className = "w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg" alt="" />
                    </div>
                
                </motion.div>

                <motion.div
                onHoverStart={()=>handleHover(3)}
                onHoverEnd={() => handleHoverEnd(3)}
                className='cardContainer relative w-1/2 h-[75vh]'>

                <h1 className='absolute flex overflow-hidden text-[#CDEA68] whitespace-nowrap right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold leading-none tracking-tighter '>
                {"FYDE".split('').map((item, index) => (
                      <motion.span 
                      initial={{y: "100%"}}
                       animate={cards[3]} 
                       transition = {{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                       className='inline-block'>{item}</motion.span>
                    ))}
                </h1>

                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                      <img className = "w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="" />
                    </div>
                </motion.div>
          </div>
      </div>


      <div className='px-20 pt-28'>
          <div className='cards w-ful flex gap-10'>
   
                <motion.div 
                onHoverStart={()=>handleHover(4)}
                onHoverEnd={() => handleHoverEnd(4)}
                className='cardContainer relative w-1/2 h-[75vh]'>
                  <h1 className='absolute flex overflow-hidden text-[#CDEA68] whitespace-nowrap right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold leading-none tracking-tighter '>
                      {"TRAWA".split('').map((item, index) => (
                        <motion.span 
                        initial={{y: "100%"}}
                         animate={cards[4]} 
                         transition = {{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                         className='inline-block'>{item}</motion.span>
                      ))}
                  </h1>

                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                      <img className = "w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
                    </div>
                
                </motion.div>

                <motion.div 
                onHoverStart={()=>handleHover(5)}
                onHoverEnd={() => handleHoverEnd(5)}
                className='cardContainer relative w-1/2 h-[75vh]'>

                <h1 className='absolute flex overflow-hidden text-[#CDEA68] whitespace-nowrap right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold leading-none tracking-tighter '>
                {"ALL  THINGS  GO".split('').map((item, index) => (
                  <motion.span 
                  initial={{y: "100%"}}
                  animate={cards[5]} 
                  transition = {{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                  className='inline-block'>{item}</motion.span>
                ))}
                </h1>

                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                      <img className = "w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png" alt="" />
                    </div>
                </motion.div>
          </div>
      </div>
      
    </div>
  )
}

export default featured
