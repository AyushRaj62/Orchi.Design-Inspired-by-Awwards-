import React from 'react'

function cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-16   '>

        <div className='cardContainer h-[55vh] w-1/2'>
            <div className='w-full h-full relative bg-[#004D43] rounded-xl flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute text-[#CDEA68] border-[#CDEA68] px-5 py-1 border rounded-full left-10 bottom-10'>&copy;2019-2025</button>
            </div>
        </div>

        <div className='cardContainer w-1/2 h-[55vh] gap-5 flex'>

            <div className='w-1/2 h-full relative flex items-center justify-center bg-[#334155] rounded-xl'> 
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-5 py-1 border rounded-full left-10 bottom-10'>RATING 5.0 ON CLUTCH </button>
            </div>

            <div className='w-1/2 h-full relative flex items-center justify-center bg-[#334155] rounded-xl'> 
                <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-5 py-1 border rounded-full left-10 bottom-10'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>

        </div>
        

    </div>
  )
}

export default cards
