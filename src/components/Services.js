import React from 'react';
import skills from "./skiils-D";
import './skills.css';

const Services = () => {
  return (
    <section className='section' id='services' style={{ marginTop: '120px' }}>
      <div className='container mx-auto'>
        <div className='flex justify-center' style={{marginBottom: '30px' }}>
          <h1 className='section__title text-cs h2 text-accent md:grid-cols-2 lg:grid-cols-3'>Professional Skills</h1>
        </div>

        <div className='skills__container grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {skills.map(({ name, percentage, description }, index) => {
            return (
              <div className='skills__item box1' key={index}>
                <div className='skills__titles'>
                  <h3 className='skills__name text-accent'>{name}</h3>
                  <span className='skills__number'>{percentage}<span>%</span></span>
                </div>
                <p className='skills__description'>{description}</p>
                <div className='skills__bar'>
                  <span
                    className='skills__percentage'
                    style={{ width: `${percentage}%` }}
                  >
                    <span></span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
