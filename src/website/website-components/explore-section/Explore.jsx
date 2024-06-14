import React, { useEffect } from 'react'
import explore from '../../website-images/explore-text.svg'
import desktop from '../../website-images/desktop-illustration.png'
import float1 from '../../website-images/explore-right-circle.svg'
import float2 from '../../website-images/explore-left-circle.svg'
// import people from '../../website-images/people-pixal-art.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Explore = () => {

  useEffect(()=>{

    gsap.to('.explore-text',{opacity:1,scrollTrigger:{
        trigger:'.explore-text',
        start:'top 80%',
        // end:'bottom 20%',
    }})

    gsap.to(['explore-f1','.explore-f2'],{x:0,y:0,scrollTrigger:{
        trigger:'.explore-text',
        start:'top 50%',
        scrub:2,
        end:'50% 20%',
    }})

    gsap.to('.explore-reveal',{y:0, duration:0.8,opacity:1,scrollTrigger:{
        trigger:'.explore-reveal',
        start:'100% bottom',
        end:'top top',
        toggleActions:'play play play reverse'
      }})

  },[])

  
  return (
    <div className=' explore relative overflow-hidden w-full mt-[25svh] sm:mt-20 lg:mt-52 pb-10' id= 'explore'>
        <div className=' flex justify-center absolute lg:top-8 top-20 z-[2] right-20 left-20 '>
            <img src={explore} className='explore-text opacity-0 translate-y-[50px] lg:scale-90 sm:scale-150 scale-[2]  text-center' alt="" />
        </div>
        <div className="flex justify-center pt-24">
            <img src={desktop} className='z-[5] relative lg:w-[55%]' alt="" />
        </div>
        <div className=" explore-reveal  lg:text-[3.9rem] mt-16 sm:mt-0 text-[1.5rem] sm:text-[2.3rem] text-center pt-4 translate-y-[60px] opacity-0 font-semibold">
            <div className="text-reveal-cards  transition-transform " >
                <span className="gradient-text">Connect </span>
                with new  
                <span className="gradient-text"> people</span> 
            </div> 
        </div>
        <img src={float1} className=' explore-f1 translate-x-40 absolute -bottom-10 h-[600px] rotate-0  z-0 right-0' alt="" />
        <img src={float2} className=' explore-f2 absolute bottom-0 h translate-y-[300px] translate-x-[-700px] z-0 left-0' alt="" />
        {/* <img src={people} className=' text-center flex left-0 right-0 items-center justify-center absolute -bottom-20 -z-[0] mx-auto ' alt=""  /> */}
        
    </div>
  )
}

export default Explore