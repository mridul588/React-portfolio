import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import Img1 from "../assets/portfolio-img1.png"
import Img2 from "../assets/portfolio-img2.png"
import Img3 from "../assets/portfolio-img3.png"


const Work = () => {
  return <section className='section' id='work'>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row gap-x-10'>
     <motion.div 
     variants={fadeIn('right',0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport = {{once:false , amount:0.3}}
     className='flex-1 flex flex-col gap-y-12  lg:mb-0 max-w-md'
     style={{ marginTop: '190px' }}>
      {/* TEXT */}
      <div>
     <h2 className='h2 leading-tight text-accent'>My Latest <br />
     Work.
     </h2>
     <p className='max-w-sm mb-16'>
     These are some of my projects.Each project is carefully crafted to demonstrate my skills and expertise in various areas of development.
     </p>
     <button className='btn btn-sm'>View all Projects</button>
      </div>
       {/* image */}
       <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-5'> 
       {/* OVERLAY */}
        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
        {/* img */}
        <img className='group-hover:scale-125 transition-all duration-500' src={Img2
        } alt='' />
        {/* Pretitle */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
        <a href="https://astounding-pie-3e8078.netlify.app/" class="text-gradient">Keep notes</a></div>
        {/* title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
          <span className='text-3xl text-white'>Reactjs</span>
        </div>
       </div>
     </motion.div>

     <motion.div 
     variants={fadeIn('left',0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport = {{once:false , amount:0.3}}
     className='flex-1 max-w-md center'>
     <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
     style={{ marginTop: '190px' }}> 
       {/* OVERLAY */}
        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
        {/* img */}
        <img className='group-hover:scale-125 transition-all duration-500 ' src={Img3} alt='' />
        {/* Pretitle */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
        <a href="https://mridul588.github.io/analog_clock-js-/</div>" className='text-gradient'>Analog clock</a></div>
        {/* title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
          <span className='text-3xl text-white'>Javascript</span>
        </div>
       </div>

       <div style={{ margin: '40px 0' }}></div>

        <div className='flex-1 flex flex-col gap-y-10 max-w-md '>
     <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl '> 
       {/* OVERLAY */}
        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
        {/* img */}
        <img className='group-hover:scale-125 transition-all duration-500 ' src={Img1} alt='' />
        {/* Pretitle */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
        <span className='text-gradient'>More projects are on the way</span></div>
        {/* title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
          <span className='text-3xl text-white'>Sample Image</span>
        </div>
       </div>
     </div>
     </motion.div>
    </div>

  </div>
  </section>;
};

export default Work;