// import React from 'react';
// // import { image } from '';
// import {FaClinicMedical} from 'react-icons/fa';
// import {RiBuilding4Fill} from 'react-icons/ri';
// import {MdMedicalServices} from 'react-icons/md';
// import './about.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init({
//   duration: 1700,
//   offset: 400
// }); 

// const AboutUs = () => (
//   <div>
//     <div className='nav'></div>
//     <div className='spacer'>
//      <span className='left' >
//       {/* <img src={image.aboutusimg1} alt="doc-img" className='img1' /> */}
//      </span>
//      <span className='right'>
//        <p1 className='heading'>About Us</p1>
//        <p className='history'> Our History </p>
//        <div className='text'>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl erat, posuere ut est quis, rhoncus rhoncus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi dui, molestie et risus at, mollis facilisis neque. Nam in commodo urna. Maecenas orci diam, ultricies sed justo sit amet, interdum tincidunt tellus. Aenean finibus sodales risus eu iaculis. Sed malesuada quam mi, ut varius sapien dictum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//        </div>     
//      </span>
//     </div>
//     <div className='comp2' data-aos = 'fade-left'>
//      <span className='spacer2'><p2 className='history'> Learn More About Us </p2></span>
//      <div class="services-grid">
//        <div class="service service1">
//          <FaClinicMedical className='icon'/>
//          <h4>Our Doctors</h4>
//          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//          <a href="#" class="cta">Read More <span class="ti-angle-right"></span></a>
//        </div>

//        <div class="service service2">
//          <RiBuilding4Fill className='icon' />
//          <h4>A Sneak Peak to Our Hospital</h4>
//          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//           <a href="#" class="cta">Read More <span class="ti-angle-right"></span></a>
//        </div>

//        <div class="service service3">
//         <MdMedicalServices className='icon' />
//         <h4>Our Facilities</h4>
//         <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//         <a href="#" class="cta">Read more <span class="ti-angle-right"></span></a>
//      </div>
//    </div>
//   </div>
//   <div data-aos='fade-right'>
//      <span className='right2'>
//      {/* <img src={image.aboutusimg2} alt="doc-img" className='img2' /> */}

//      </span>
//      <span className='left2'>
//       <p className='history'> Our Vision </p>
//       <div className='text'>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl erat, posuere ut est quis, rhoncus rhoncus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi dui, molestie et risus at, mollis facilisis neque. Nam in commodo urna. Maecenas orci diam, ultricies sed justo sit amet, interdum tincidunt tellus. Aenean finibus sodales risus eu iaculis. Sed malesuada quam mi, ut varius sapien dictum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//        </div> 
//      </span>
//    </div>
   
// </div>
// );

// export default AboutUs;



import React from 'react';
import { aboutusimg1,aboutusimg2 } from '../../assets/image';
import './about.css';

function readMore() {
    var expandInfo = document.getElementById("more-info-js");
    var mainHeadings = document.getElementById("main-headings-js");
    
    mainHeadings.style.transform = "scale(0.7)";
    expandInfo.style.height = "350px";
  } 

const AboutUs = () => (
  <div>
    <div className="about--container">
  <div className="about--container-inner">
    <div className="about--main-content">
      <div className="about--main-headings" id="about--main-headings-js">
      <p id="about--by-line">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="about--heading">
        <h3 id="about--heading1">About Us</h3>
        <h3 id="about--heading2">Our</h3>
        <h1 id="about--heading3">History</h1>
      </div>

      <div className="about--short-bio">
        <p className="about--short-bio1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, repellat, quod sed optio nesciunt aspernatur inventore ab, nostrum accusantium harum dolor voluptate nulla!</p>
   
      </div>

      <a href="#" className="about--link" onclick={readMore}>Read More</a>
      </div>
      
      <div className="about--more-info " id="about--more-info-js">
        
        <h4>Lorem ipsum dolor sit.</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse expedita impedit iste, quibusdam debitis fugit repudiandae voluptatum vero quod nulla!</p>
        
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus iusto facere dignissimos quaerat facilis voluptatibus fuga quod impedit. Atque tenetur amet officia repudiandae odit.</p>
        
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni saepe suscipit deleniti porro fugit! Atque nisi alias a porro fugiat incidunt exercitationem! Nihil, consectetur. Expedita.</p>
      </div>
      
    </div>

    <div className="about--image-wrapper">
    <div className="about--image-container">
      <img className="about--image" src={aboutusimg1} alt="image of doctors"></img>
    </div>
  </div>
</div>
</div>
   
</div>
);

export default AboutUs;