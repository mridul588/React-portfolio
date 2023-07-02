import React from 'react';
//import icons
import {BiHomeAlt , BiUser} from "react-icons/bi";
import {BsClipboardData ,BsBriefcase ,  BsChatSquareText } from "react-icons/bs";

//link]

import {Link} from "react-scroll";
const Nav = () => {
  return <nav className='fixed bottom-1 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto '> 
    {/* nav inner */}
    <div className='w-full bg-black/20 h-[40px] backdrop-blur-2xl rounded-full max-w-[300px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
      
      {/* //home btn */}
      <Link to='home' 
      activeClass='active'
        smooth={true}
        spy={true} 
        offset={-200}
        className='cursor-pointer w-[20px] h-[20px] flex item-center justify-center'>
        <BiHomeAlt />

      </Link>

      {/* //About btn */}

        <Link to='about'
        activeClass='active'
        smooth={true}
        spy={true} className='cursor-pointer w-[20px] h-[20px] flex item-center justify-center'>
        <BiUser />
      </Link>

      {/* {//Service} */}
      <Link to='services' 
      activeClass='active'
        smooth={true}
        spy={true}
        className='cursor-pointer  w-[20px] h-[20px] flex item-center justify-center'>
        <BsClipboardData />
      </Link>

      {/* {//kaam dhanda} */}
      <Link to='work'activeClass='active'
        smooth={true}
        spy={true}
         className='cursor-pointer  w-[20px] h-[20px] flex item-center justify-center'>
        <BsBriefcase />
      </Link>

      {/* sampark */}
      <Link to='contact' activeClass='active'
        smooth={true}
        spy={true}
        className='cursor-pointer  w-[20px] h-[20px] flex item-center justify-center'>
        <BsChatSquareText />
      </Link>


    </div>
    </div>
  </nav>;
};

export default Nav;
