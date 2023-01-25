import './footer.css';
import hlogo from '../../assets/hlogo.png';
import { FiPhoneCall , FiMail } from 'react-icons/fi';
import { MdOutlineLocationCity } from 'react-icons/md';
import { FaFacebookF , FaInstagram , FaWhatsapp , FaPlus } from 'react-icons/fa';
import { useState } from "react";


function Footer(){

    const [display1, setdisplay1] = useState(true);
    const [display2, setdisplay2] = useState(true);

    return(

        <div>

            {/* DESKTOP SCREEN */}

            <div className='footer--footer'>
                <div className='footer--footer1'>
                    <div className='footer--reachus-section'>
                        <div id='footer--footer-logo'><img src={hlogo}></img></div>
                        <div>
                            <div className='footer--address-footer'><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'><span><MdOutlineLocationCity/></span>Near Bhagat Singh Circle, Pilani, Rajasthan 333031</a></div>
                            <div className='footer--contact-footer'><a href='tel:8302476768'><span><FiPhoneCall/></span>+91-8302476768</a></div>
                            <div className='footer--gmail-footer'><a href='mailto:prateekhospital@gmail.com'><span><FiMail/></span>Prateekhospital@gmail.com</a></div>
                            <div>
                                <div id='footer--follow-us'>Follow us:</div>
                                <div className='footer--social-link'>
                                    <div className='footer--facebook-footer'><a><span><FaFacebookF/></span></a></div>
                                    <div className='footer--instagram-footer'><a><span><FaInstagram/></span></a></div>
                                    <div className='footer--linkdin-footer'><a><span><FaWhatsapp/></span></a></div>
                                </div>
                            </div>
                        </div>
                        <div className='footer--location'> 
                            <div><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'>Find on map</a></div>
                        </div>
                    </div>
                    <div className='footer--vertical-line1'></div>
                    <div className='footer--about-guide'>
                        <div className='footer--vertical-line2'></div>
                        <div className='footer--about-footer'>
                            <div>
                                <h4 className='footer--footer-h4'>ABOUT US</h4>                           
                            </div>
                            <div>
                                <ul>
                                    <li><a>VISION</a></li>
                                    <li><a>AIM</a></li>
                                    <li><a>WHY CHOOSE US</a></li>
                                    <li><a>SERVICES</a></li>
                                    <li><a>GALLERY</a></li>
                                    <li><a>DOCTORS PANEL</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer--vertical-line3'></div>
                        <div className='footer--guide-footer'>
                            <div>
                                <h4 className='footer--footer-h4'>PATIENT GUIDE</h4>
                            </div>
                            <div>
                                <ul>
                                    <li><a>HOW TO MAKE APPIONTMENT</a></li>
                                    <li><a>HOW TO GIVE FEEDBACK</a></li>
                                    <li><a>TERMS AND CONDITION</a></li>
                                    <li><a>OPENING HOURS</a></li>
                                    <li><a>AGREEMENT</a></li>
                                    <li><a>SLOT BOOKING</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer--footer2'>
                    <div><p>© 2020 Prateek Hospital Ltd. All Rights Reserved.</p></div>
                </div>
            </div>

            {/* MOBILE SCREEN */}

            <div className='footer--footer-mobile'>
                <div className='footer--footer1-mobile'>
                    <div className='footer--reachus-section-mobile'>
                            <div id='footer--footer-logo'><img src={hlogo}></img></div>
                            <div className='footer--contact-list'>
                                <div className='footer--address-footer'><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'><span><MdOutlineLocationCity/></span>Near Bhagat Singh Circle, Pilani, Rajasthan 333031</a></div>
                                <div className='footer--gmail-footer'><a href='mailto:prateekhospital@gmail.com'><span><FiMail/></span>Prateekhospital@gmail.com</a></div>
                                <div className='footer--contact-footer'><a href='tel:8302476768'><span><FiPhoneCall/></span>+91-8302476768</a></div>
                            </div>
                            <div className='footer--social-link-mobile'>
                                <div className='footer--location'> 
                                    <div><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'>Find on map</a></div>
                                </div>
                                <div>
                                    <div className='footer--social-link'>
                                        <div className='footer--facebook-footer'><a><span><FaFacebookF/></span></a></div>
                                        <div className='footer--instagram-footer'><a><span><FaInstagram/></span></a></div>
                                        <div className='footer--linkdin-footer'><a><span><FaWhatsapp/></span></a></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='footer--about-guide'>
                        <div className='footer--about-footer'>
                            <div>
                                <h4 className='footer--footer-h4'>ABOUT US<span onClick={()=> setdisplay1(!display1)}><FaPlus/></span></h4>
                            </div>
                            <div id={display1 ? 'about-footer-display' : ''}>
                                <ul>
                                    <li><a>VISION</a></li>
                                    <li><a>AIM</a></li>
                                    <li><a>WHY CHOOSE US</a></li>
                                    <li><a>SERVICES</a></li>
                                    <li><a>GALLERY</a></li>
                                    <li><a>DOCTORS PANEL</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer--guide-footer'>
                            <div>
                                <h4 className='footer--footer-h4'>PATIENT GUIDE<span onClick={()=> setdisplay2(!display2)}><FaPlus/></span></h4>
                            </div>
                            <div id={display2 ? 'guide-footer-display' : ''}>
                                <ul>
                                    <li><a>HOW TO MAKE APPIONTMENT</a></li>
                                    <li><a>HOW TO GIVE FEEDBACK</a></li>
                                    <li><a>TERMS AND CONDITION</a></li>
                                    <li><a>OPENING HOURS</a></li>
                                    <li><a>AGREEMENT</a></li>
                                    <li><a>SLOT BOOKING</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer--footer2-mobile'>
                    <div><p>© 2020 Prateek Hospital Ltd. All Rights Reserved.</p></div>
                </div>
            </div>

            {/* TABLET SCRREN */}

            <div className='footer--footer-tablet'>
                <div className='footer--footer1'>
                    <div className='footer--reachus-section'>
                        <div id='footer--footer-logo'><img src={hlogo}></img></div>
                        <div className='footer--social'>
                            <div className='footer--address-footer'><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'><span><MdOutlineLocationCity/></span>Near Bhagat Singh Circle, Pilani, Rajasthan 333031</a></div>
                            <div className='footer--contact-footer'><a href='tel:8302476768'><span><FiPhoneCall/></span>+91-8302476768</a></div>
                            <div className='footer--gmail-footer'><a href='mailto:prateekhospital@gmail.com'><span><FiMail/></span>Prateekhospital@gmail.com</a></div>
                            <div className='footer--social-flex'>
                                {/* <div id='footer--follow-us'>Follow us:</div> */}
                                <div className='footer--social-link'>
                                    <div className='footer--facebook-footer'><a><span><FaFacebookF/></span></a></div>
                                    <div className='footer--instagram-footer'><a><span><FaInstagram/></span></a></div>
                                    <div className='footer--linkdin-footer'><a><span><FaWhatsapp/></span></a></div>
                                </div>
                                <div className='footer--location'> 
                                    <div><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'>Find on map</a></div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='footer--location'> 
                            <div><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'>Find on map</a></div>
                        </div> */}
                    </div>
                    <div className='footer--about-guide'>
                        <div className='footer--about-footer'>
                            <div>
                                <h4 className='footer--footer-h4'>ABOUT US</h4>                           
                            </div>
                            <div>
                                <ul>
                                    <li><a>VISION</a></li>
                                    <li><a>AIM</a></li>
                                    <li><a>WHY CHOOSE US</a></li>
                                    <li><a>SERVICES</a></li>
                                    <li><a>GALLERY</a></li>
                                    <li><a>DOCTORS PANEL</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='footer--guide-footer'>
                            <div>
                                <h4 className='footer--footer-h4'>PATIENT GUIDE</h4>
                            </div>
                            <div>
                                <ul>
                                    <li><a>HOW TO MAKE APPIONTMENT</a></li>
                                    <li><a>HOW TO GIVE FEEDBACK</a></li>
                                    <li><a>TERMS AND CONDITION</a></li>
                                    <li><a>OPENING HOURS</a></li>
                                    <li><a>AGREEMENT</a></li>
                                    <li><a>SLOT BOOKING</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer--footer2'>
                    <div><p>© 2020 Prateek Hospital Ltd. All Rights Reserved.</p></div>
                </div>
            </div>
        </div>

    )
}

export default Footer;