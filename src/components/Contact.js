import React from 'react';
//motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { MdPhone } from 'react-icons/md';


const Contact = () => {
  return <section className='py-16 lg:section' id='contact'
    style={{ marginTop: '200px' }}>
    <div className='container mx-auto mt-58'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex justify-start item-center '
          style={{ marginTop: '40px' }}
        >
          {/* item-center */}
          <div>
            <h4 className='text-[55px] uppercase text-accent font-medium mb-2 tracking-wide mx-auto lg:mx-20'>
              Get in touch</h4>
            <h4 className='text-[25px] lg:text-[50px] leading-none mb-8 mx-auto lg:mx-20 mt-20'>
              Let's work <br /> together!
            </h4>
          </div>
        </motion.div>
        {/* form */}
        <motion.form
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 border rounded-2xl max-w-[450px] mx-auto lg:mx-20 flex flex-col gap-y-3 pb-20 p-6 item-start'
        >
          <input className='bg-transparent border-b py-1 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your name' />
          <input className='bg-transparent border-b py-1 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='email' placeholder='Your email' />
          <textarea className='bg-transparent border-b py-5 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' typeof='text' placeholder='Your message/If you came this far Say HI !'></textarea>
          <a href="mailto:b121030@iiit-bh.ac.in" className='btn btn-lg1c'>Send</a>
        </motion.form>

      </div>
    </div>
  </section>;
};

export default Contact;
