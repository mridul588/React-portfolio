import React, { useEffect } from 'react';
//images

import Image from "../assets/av2.jpg";
//icons

import { FaGithub, FaYoutube, FaDribbble, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';
//animation

import { TypeAnimation } from "react-type-animation";
//variants
//motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


const Banner = () => {
  useEffect(() => {
    // Set margin-top to 20px when the component is mounted
    const homeDiv = document.getElementById('home');
    if (homeDiv) {
      homeDiv.style.marginTop = '35px';
    }

    return () => {
      // Reset margin-top when the component is unmounted
      if (homeDiv) {
        homeDiv.style.marginTop = '';
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once

  // change
  return <div className='min-h-[85vh] lg:min-h-[98vh] flex items-center ' id='home' >
    <div className='container mx-auto mt-35'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:item-center
      lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondry lg:text-left'>
          <motion.h3 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] font-bold leading-[2] lg:text-[50px]'>
            MRIDUL <span>TRIPATHI</span>
          </motion.h3>
          <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[50px] font-secondry font-semibold uppercase leading-[1]'>
            <span className="text-white mr-2">I am a</span>
            <TypeAnimation sequence={[
              "Web Developer",
              2000,
              "Programmer",
              2000,
              "Student",
              2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />

          </motion.div>
          <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-xl mx-auto lg:mx-0'>
            I am a Third-year CSE student at IIIT Bhubaneswar<br />A skilled web developer proficient in DSA
          </motion.p>
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg '>Download CV</button>
            {/* <a href='#' className='text-gradient btn-link'>My CV
            </a> */}
          </motion.div>
          {/* socials */}
          <motion.div variants={fadeIn('down', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              
              <a href='https://github.com/mridul588'>
                <FaGithub size={27}  style={{ color: '#4078c0' }}/>
                </a>

            <a href="https://www.instagram.com/mridul.tripathi.125/" role="button">
              {/* <!-- Instagram --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#c13584" }}
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a href='https://www.linkedin.com/in/mridul-tripathi-08785724a' target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={27} style={{ color: '#0077B5' }} />
                </a>
            
                <a href='https://leetcode.com/b121030/'>
  <SiLeetcode size={27} style={{ color: '#FFA116' }} />
</a>



           
          </motion.div>
        </div>
        {/* image */}
        <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[340px]  animLine'>
          {/* <img src={Image} alt=''  style={{
      borderRadius: '50%',
      width: '280px',
      height: '280px',
      objectFit: 'cover',
    }} /> */}
          <div className="image-container">
            <img
              src={Image}
              alt=''
              className="image"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </div>;
};

export default Banner;
