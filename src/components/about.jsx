import React from 'react'

function about() {
  return (
    <div className='w-full py-20 bg-[#CDEA68] rounded-tl-xl rounded-tr-xl text-black'>
    
    <h1 className='text-[4.5vw] p-20 leading-[4.5vw] tracking-tight'>
        We craft category-defining presentations, brand identities,
        and digital experiences that drive funding, sales, and market leadership.
        </h1>

        <div className='w-full flex border-t-[1px] pt-20 border-[#a1b562] mt-20'>
  
  <div className='w-1/2 mx-20 '>
    <h1 className='text-7xl '>How we can help:</h1>
    <div>
      <button className='px-10 py-5 bg-zinc-900 rounded-full text-white mt-8 text-bold flex items-center gap-5'>
        READ MORE
        <div className='w-3 h-3 bg-zinc-100 rounded-full -ml-2'></div>
      </button>
    </div>
  </div>

  {/* Right side */}
  <div className='w-1/2 flex justify-center items-center'>
    <img className='w-full h-[70vh] mr-20 rounded-3xl bg-[#b0c859]' src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg' alt='' />
  </div>

</div>

    
    </div>
  )
}

export default about
