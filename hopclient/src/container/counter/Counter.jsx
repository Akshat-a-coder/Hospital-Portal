import './counter.css';
import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Counter(){
  const[ counterOn, setCounterOn] = useState(false) ;
  return(
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
      < div className='counter--photo'>  
        <h1>Our Statistics</h1>
      <div className='counter--all'>
        <div className='counter--a'>
          <h2>Satisfied </h2> <h2>Patients</h2>
          <h3>{counterOn && <CountUp start={0} end={1500} duration={3} delay={0} /> } + </h3>
        </div>
    
        <div className='counter--b'>
          <h2> Successfull </h2> <h2> Surgeries </h2>
          <h3>{counterOn && <CountUp start={0} end={1000} duration={3} delay={0} /> } + </h3>
        </div>
    
        <div className='counter--c'>
          <h2>Skilled </h2> <h2> Doctors</h2>
          <h3>{counterOn && <CountUp start={0} end={50} duration={3} delay={0} /> } + </h3>
        </div>
    
        <div className='counter--d'>
          <h2>Serving </h2> <h2> Since</h2>
          <h3>{counterOn && <CountUp start={0} end={2000} duration={3} delay={0} /> } + </h3>
        </div>
      </div>       
      </div>
    </ScrollTrigger>
  );
}
export default Counter;