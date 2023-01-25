import React from 'react';
import './navbar.css';
import { FiPhoneCall , FiMail } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import hlogo from '../../assets/hlogo.png';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar(){

    const [display, setdisplay] = useState(false);

    return(
        <div>
            <div className='navbar--navbar'>
                <div className='navbar--navbarpart1'>
                    <div id='navbar--logo'><img src={hlogo}></img></div>
                    <div className='navbar--contact'><a><span><FiPhoneCall/></span>+91-83024xxxxx</a></div>
                    <div className='navbar--gmail'><a><span><FiMail/></span>hospital@gmail.com</a></div>
                </div>
                <div className='navbar--navbarpart2'>
                    <div className='navbar--logo-hamburger'>
                        <div id='navbar--logo'><img src={hlogo}></img></div>
                        <div className='navbar--cross' id={display ? 'navbar--hide-cross' : ''} onClick={()=> setdisplay(!display)}><ImCross/></div>
                        <div className='navbar--hamburger' id={display ? '' : 'navbar--hide-hamburger'} onClick={()=> setdisplay(!display)}><GiHamburgerMenu/></div>
                    </div>
                    <div className='navbar--navbar-menu' id={display ? 'navbar--hidden' : ''}>
                        <div>
                            <ul>
                                <li><Link className='navbar--nav-items' to='/'>HOME</Link></li>
                                <li><Link className='navbar--nav-items' to='/aboutus'>ABOUT US</Link></li>
                                <li><Link className='navbar--nav-items' to='/services'>SERVICES</Link></li>
                                <li><Link className='navbar--nav-items' to='/guide'>GUIDE</Link></li>
                                <li><Link className='navbar--nav-items' to='/gallery'>GALLERY</Link></li>
                                <li><Link className='navbar--nav-items' to='/doctors'>DOCTORS PANEL</Link></li>
                            </ul>
                        </div>
                        <div className='navbar--navbar-menubtn'>
                            <button><Link className='navbar--nav-items' to='/apoint'>BOOK AN APOINTMENT</Link></button>
                            <button><Link className='navbar--nav-items' to='/feedback'>FEEDBACK</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='navbar--slide'>
                <img src={doctors}></img>
            </div>


            <div className='navbar--navbar'>
                
            </div> */}



        </div>
    )
}

export default Navbar;
