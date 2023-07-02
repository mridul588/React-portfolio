import React from 'react';
import CountUp from 'react-countup';
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import { Link, animateScroll as scroll } from 'react-scroll';

const About = () => {
  const [ref,InView] = useInView({
    threshold: 0.5,
  })
  return <section className='section' id='about' ref={ref}>
  <div className='container mx-auto'
  style={{ marginTop: '300px' }}>
    <div className='flex flex-col gap-y-10 lg:flex-row lg:item-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      {/* img */}
      <motion.div 
       variants={fadeIn('right',0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport = {{once:false , amount:0.3}}
      
      className='flex-1 bg-about bg-contain bg-no-repeat h-[340px] mix-blend-lighten bg-top'></motion.div>
      {/* text */}
      <motion.div 
       variants={fadeIn('left',0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport = {{once:false , amount:0.3}}
      className='flex-1'>
        <h2 className='h2 text-accent'>About me.</h2>
        <h3 className='h3 mb-4 font-bold leading-[1.5] lg:text-[25px]'>I am in my junior year at IIIT Bhubaneswar CSE. 
        </h3>
        <p className='mb-6'>I am also honing my skills in the development, working on web development projects. My goal is to combine my expertise in DSA and proficiency in MERN stack to build innovative and efficient solutions.
        </p>
        {/* stats */}
        <div className='flex gap-x-6 lg:gap-10 mb-12'>
          <div>
            <div className='text-[25px] font-tertiary text-gradient mb-2'>
             {InView ? <CountUp start={0} end={92.4} duration={3} /> :
             null} 
             .4%
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
            Tenth grade <br />JNV pbh
            </div>
          </div>
          <div>
            <div className='text-[25px] font-tertiary text-gradient mb-2'>
             {InView ? <CountUp start={0} end={73} duration={3} /> :
             null} 
             %
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
            Twelfth grade<br />State board(UP)
            </div>
          </div>
          <div>
            <div className='text-[25px] font-tertiary text-gradient mb-2'>
             {InView ? <CountUp start={0} end={8} duration={3} /> :
             null}
             .16
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Current <br />CGPA
            </div>
          </div>
        </div>
        <div className='flex gap-x-8 items-center'>
        <Link to="contact"><button className="btn btn-sm">Contact me</button> </Link>
        <a href='#' className='text-gradient btn-link' >
          My CV
        </a>
        </div>
        
      </motion.div>
    </div>
  </div>
  </section>;
};

export default About;
