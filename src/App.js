import { useGSAP } from '@gsap/react';
import './App.css';
import Website from './website/Website';
import {gsap} from 'gsap';




function App() {

  useGSAP(()=>{
    const tl=gsap.timeline({paused:true})

    // tl.to('.redirect',{
    //   y:0,
    //   duration:1,
    //   ease:'power3.easeIn',
    // })
    tl.to('.welcome-screen',{
      y:0,
      duration:1,
      ease:'power3.easeOut'
    })
    tl.to('.welcome-text-1',{
      y:0,
      duration:1,
      ease:'power3.easeInOut'
    })
    tl.to('.welcome-text-2',{
      y:0,
      duration:1,
      ease:'power3.easeInOut',
    })
    tl.to(['.welcome-text-1','.welcome-text-2'],{
      // y:0,
      opacity:0,
      duration:1,
      ease:'power3.easeInOut'
    })
    tl.to('.redirect',{
      yPercent:100,
      duration:1,
      ease:'power3.easeIn',
    })
  })
  
  return (
    <div className="App text-gray-100 relative">
      <div className="redirect fixed z-20 top-0 left-0 right-0 bottom-0 justify-center items-center bg-black translate-y-[-100%] overflow-hidden" >
        <div className="welcome-screen flex justify-center h-full translate-y-[100%] flex-col items-center text-white translate-y[100%]">
          <div className="welcome-container overflow-hidden lg:text-[4.8rem]  text-[2.7rem] mt-[-8rem] font-bold lg:font-medium">
            <h1 className=" welcome-text-1 translate-y-[100%]">Helloo!👋</h1>
          </div>
          <div className="welcome-container overflow-hidden text-lg md:text-3xl md:mt-4 tracking-wide ">
            <h2 className=" welcome-text-2 translate-y-[100%]"><span className="opacity-90">Welcom to</span> <span className="gradient-text inline font-bold ">Chat Circle </span> </h2>
          </div>
        </div>
      </div>
      <Website/>
    </div>
  );
}
export default App;