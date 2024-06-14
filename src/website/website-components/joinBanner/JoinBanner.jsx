import React from 'react'

const JoinBanner = () => {

  

  return (
    <div id='join' className='join-banner relative sm:py-4 py-28 -mt-[10svh] sm:mt-0 '>
      <div className=' my-[3rem] lg:my-[15rem] relative flex flex-col justify-center'>
        <div className="lg:text-[4.8rem] text-[2.5rem] sm:text-[2.7rem] lg:mb-[5rem] mb-[2rem] font-bold lg:font-medium text-center">
          <h2 className=''>
            Join your circle <span className="gradient-text block text-[2rem] sm:text-inherit  ">Today itself!</span>
          </h2>
        </div>
        <div className=" join-heading lg:text-[25rem] text-[6rem]  join-div lg:h-[280px]  bg-black w-full overflow-x-hidden">
          <div to='app'>
            <div className="join-span-container lg:h-[280px] tracking-[-10px] lg:tracking-[-15px] lg:gap-36 gap-14 flex justify-center items-center">
              <span>JOIN</span>
              <span>JOIN</span>
              <span>JOIN</span>
            </div>
          </div>
        </div>
          <div to='app' className="join-btn px-12 inline self-center font-medium text-black tracking-tighter rounded-[7px] scale-75 lg:scale-100 mb-[40px] mt-[40px] lg:mb-[57px] lg:mt-[75px] text-[4rem] leading-[70px] bg-[#F1b739] ">
            JOIN
          </div>
        </div>
    </div>
  )
}

export default JoinBanner