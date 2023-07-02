import React, { useEffect, useState } from 'react';
import LOGO from '../assets/logo1.png';
import { Link, animateScroll as scroll } from 'react-scroll';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);}
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `py-3 ${isScrolled ? 'stickyc top-0 bg-gradient-to-r fixed w-full z-10 from-pink-100 to-blue-500 ' : ''}`;
  // const headerClasses = `py-2  'sticky top-0 bg-gradient-to-r from-pink-200 to-blue-300' `;
  return (
    <header className={headerClasses}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href=" ">
            <img className="img-responsive " src={LOGO} alt="" />
          </a>
         

          

{/* <button className="btn btn-sm">
<Link to="/#contact">Work with me</Link>
</button>  */}


<Link to="contact"><button className="btn btn-sm">Work with me</button> </Link>




        </div>
      </div>
    </header>
  );
};

export default Header;
