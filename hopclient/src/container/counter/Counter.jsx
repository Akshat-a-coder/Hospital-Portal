import './counter.css';
import React , { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import {Background} from '../../constants/images'

function Timer() {
 const [count, setCount] = useState(0);
 const [count1, setCount1] = useState(0);
 const [count2, setCount2] = useState(0);
 const [count3, setCount3] = useState(0);
 
 useEffect(() => {
   setTimeout(() => {
     setCount((count) => ((count < 1500 )) ? count + 30 : (count));
     setCount1((count1) => ((count1 < 1000 )) ? count1 + 20 : (count1));
     setCount2((count2) => ((count2 < 50 )) ? count2 + 1 : (count2));
     setCount3((count3) => ((count3 < 2000 )) ? count3 + 40 : (count3));
   }, 50);
 });
 return <div className='all'>
   <div className='photo'>  
   <h1> Our Statistics </h1>
   <div className='a'>
   <h2> Satisfied </h2> <h2> Patients </h2>
   <h3>{count}+ </h3> </div>
   <div className='b'>
   <h2> Successfull </h2> <h2> Surgeries </h2>
   <h3> {count1}+ </h3> </div>
   <div className='c'>
   <h2> Skilled </h2> <h2> Doctors </h2>
   <h3> {count2}  </h3> </div>
   <div className='d'>
   <h2> Serving </h2> <h2> Since </h2>
   <h3> {count3}  </h3> </div>
   {/* <div className='image'> <img src={Background} alt='#'/> </div>      */}
   </div> 
   </div>;
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

export default Timer ;