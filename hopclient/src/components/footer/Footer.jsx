import './footer.css';
import hlogo from '../../assets/hlogo.jpeg';
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

            <div className='footer'>
                <div className='footer1'>
                    <div className='reachus-section'>
                        <div id='footer-logo'><img src={hlogo}></img></div>
                        <div>
                            <div className='address-footer'><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'><span><MdOutlineLocationCity/></span>Near Bhagat Singh Circle, Pilani, Rajasthan 333031</a></div>
                            <div className='contact-footer'><a href='tel:8302476768'><span><FiPhoneCall/></span>+91-8302476768</a></div>
                            <div className='gmail-footer'><a href='mailto:prateekhospital@gmail.com'><span><FiMail/></span>Prateekhospital@gmail.com</a></div>
                            <div>
                                <div id='follow-us'>Follow us:</div>
                                <div className='social-link'>
                                    <div className='facebook-footer'><a><span><FaFacebookF/></span></a></div>
                                    <div className='instagram-footer'><a><span><FaInstagram/></span></a></div>
                                    <div className='linkdin-footer'><a><span><FaWhatsapp/></span></a></div>
                                </div>
                            </div>
                        </div>
                        <div className='location'> 
                            <div><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'>Find on map</a></div>
                        </div>
                    </div>
                    <div className='vertical-line1'></div>
                    <div className='about-guide'>
                        <div className='vertical-line2'></div>
                        <div className='about-footer'>
                            <div>
                                <h4>ABOUT US</h4>                           
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
                        <div className='vertical-line3'></div>
                        <div className='guide-footer'>
                            <div>
                                <h4>PATIENT GUIDE</h4>
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
                <div className='footer2'>
                    <div><p>© 2020 Prateek Hospital Ltd. All Rights Reserved.</p></div>
                </div>
            </div>

            {/* MOBILE SCREEN */}

            <div className='footer-mobile'>
                <div className='footer1-mobile'>
                    <div className='reachus-section-mobile'>
                            <div id='footer-logo'><img src={hlogo}></img></div>
                            <div className='contact-list'>
                                <div className='address-footer'><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'><span><MdOutlineLocationCity/></span>Near Bhagat Singh Circle, Pilani, Rajasthan 333031</a></div>
                                <div className='gmail-footer'><a href='mailto:prateekhospital@gmail.com'><span><FiMail/></span>Prateekhospital@gmail.com</a></div>
                                <div className='contact-footer'><a href='tel:8302476768'><span><FiPhoneCall/></span>+91-8302476768</a></div>
                            </div>
                            <div className='social-link-mobile'>
                                <div className='location'> 
                                    <div><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'>Find on map</a></div>
                                </div>
                                <div>
                                    <div className='social-link'>
                                        <div className='facebook-footer'><a><span><FaFacebookF/></span></a></div>
                                        <div className='instagram-footer'><a><span><FaInstagram/></span></a></div>
                                        <div className='linkdin-footer'><a><span><FaWhatsapp/></span></a></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='about-guide'>
                        <div className='about-footer'>
                            <div>
                                <h4>ABOUT US<span onClick={()=> setdisplay1(!display1)}><FaPlus/></span></h4>
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
                        <div className='guide-footer'>
                            <div>
                                <h4>PATIENT GUIDE<span onClick={()=> setdisplay2(!display2)}><FaPlus/></span></h4>
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
                <div className='footer2-mobile'>
                    <div><p>© 2020 Prateek Hospital Ltd. All Rights Reserved.</p></div>
                </div>
            </div>

            {/* TABLET SCRREN */}

            <div className='footer-tablet'>
                <div className='footer1'>
                    <div className='reachus-section'>
                        <div id='footer-logo'><img src={hlogo}></img></div>
                        <div className='social'>
                            <div className='address-footer'><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'><span><MdOutlineLocationCity/></span>Near Bhagat Singh Circle, Pilani, Rajasthan 333031</a></div>
                            <div className='contact-footer'><a href='tel:8302476768'><span><FiPhoneCall/></span>+91-8302476768</a></div>
                            <div className='gmail-footer'><a href='mailto:prateekhospital@gmail.com'><span><FiMail/></span>Prateekhospital@gmail.com</a></div>
                            <div className='social-flex'>
                                {/* <div id='follow-us'>Follow us:</div> */}
                                <div className='social-link'>
                                    <div className='facebook-footer'><a><span><FaFacebookF/></span></a></div>
                                    <div className='instagram-footer'><a><span><FaInstagram/></span></a></div>
                                    <div className='linkdin-footer'><a><span><FaWhatsapp/></span></a></div>
                                </div>
                                <div className='location'> 
                                    <div><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'>Find on map</a></div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='location'> 
                            <div><a href='https://goo.gl/maps/bfiusL3Krzd5KmXR7'>Find on map</a></div>
                        </div> */}
                    </div>
                    <div className='about-guide'>
                        <div className='about-footer'>
                            <div>
                                <h4>ABOUT US</h4>                           
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

                        <div className='guide-footer'>
                            <div>
                                <h4>PATIENT GUIDE</h4>
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
                <div className='footer2'>
                    <div><p>© 2020 Prateek Hospital Ltd. All Rights Reserved.</p></div>
                </div>
            </div>
        </div>

    )
}

export default Footer;