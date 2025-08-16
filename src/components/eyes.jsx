import React, { useState, useEffect } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [bgImage, setBgImage] = useState(
    "https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg"
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden relative">

      <img data-scroll data-scroll-speed="-.7"
        src={bgImage}
        alt="Background"
        onError={() => setBgImage("https://dummyimage.com/1920x1080/000/fff")} 
        className="absolute w-full h-full object-cover"
      />


      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
        

        <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
          <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
          <div
            style={{
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            }}
          className="absolute top-1/2 left-1/2 w-full h-full"
          >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-zinc-100 rounded-full"></div>
      </div>

          </div>
        </div>


        <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
          <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 transition-transform duration-100 ease-linear"
            >
              <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
