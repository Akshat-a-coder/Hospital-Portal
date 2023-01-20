import React from 'react';
// import { image } from '';
import {FaClinicMedical} from 'react-icons/fa';
import {RiBuilding4Fill} from 'react-icons/ri';
import {MdMedicalServices} from 'react-icons/md';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  duration: 1700,
  offset: 400
}); 

const AboutUs = () => (
  <div>
    <div className='nav'></div>
    <div className='spacer'>
     <span className='left' >
      {/* <img src={image.aboutusimg1} alt="doc-img" className='img1' /> */}
     </span>
     <span className='right'>
       <p1 className='heading'>About Us</p1>
       <p className='history'> Our History </p>
       <div className='text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl erat, posuere ut est quis, rhoncus rhoncus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi dui, molestie et risus at, mollis facilisis neque. Nam in commodo urna. Maecenas orci diam, ultricies sed justo sit amet, interdum tincidunt tellus. Aenean finibus sodales risus eu iaculis. Sed malesuada quam mi, ut varius sapien dictum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>     
     </span>
    </div>
    <div className='comp2' data-aos = 'fade-left'>
     <span className='spacer2'><p2 className='history'> Learn More About Us </p2></span>
     <div class="services-grid">
       <div class="service service1">
         <FaClinicMedical className='icon'/>
         <h4>Our Doctors</h4>
         <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <a href="#" class="cta">Read More <span class="ti-angle-right"></span></a>
       </div>

       <div class="service service2">
         <RiBuilding4Fill className='icon' />
         <h4>A Sneak Peak to Our Hospital</h4>
         <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a href="#" class="cta">Read More <span class="ti-angle-right"></span></a>
       </div>

       <div class="service service3">
        <MdMedicalServices className='icon' />
        <h4>Our Facilities</h4>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="#" class="cta">Read more <span class="ti-angle-right"></span></a>
     </div>
   </div>
  </div>
  <div data-aos='fade-right'>
     <span className='right2'>
     {/* <img src={image.aboutusimg2} alt="doc-img" className='img2' /> */}

     </span>
     <span className='left2'>
      <p className='history'> Our Vision </p>
      <div className='text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl erat, posuere ut est quis, rhoncus rhoncus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi dui, molestie et risus at, mollis facilisis neque. Nam in commodo urna. Maecenas orci diam, ultricies sed justo sit amet, interdum tincidunt tellus. Aenean finibus sodales risus eu iaculis. Sed malesuada quam mi, ut varius sapien dictum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div> 
     </span>
   </div>
   
</div>
);

export default AboutUs;