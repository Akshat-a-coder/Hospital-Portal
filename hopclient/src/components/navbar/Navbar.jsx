import React from 'react';
import './navbar.css';
import { FiPhoneCall , FiMail } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import hlogo from '../../assets/hlogo.jpeg';
import { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar(){

    const [display, setdisplay] = useState(false);

    return(
        <div>
            <div className='navbar'>
                <div className='navbarpart1'>
                    <div id='logo'><img src={hlogo}></img></div>
                    <div className='contact'><a><span><FiPhoneCall/></span>+91-83024xxxxx</a></div>
                    <div className='gmail'><a><span><FiMail/></span>hospital@gmail.com</a></div>
                </div>
                <div className='navbarpart2'>
                    <div className='logo-hamburger'>
                        <div id='logo'><img src={hlogo}></img></div>
                        <div className='cross' id={display ? 'hide-cross' : ''} onClick={()=> setdisplay(!display)}><ImCross/></div>
                        <div className='hamburger' id={display ? '' : 'hide-hamburger'} onClick={()=> setdisplay(!display)}><GiHamburgerMenu/></div>
                    </div>
                    <div className='navbar-menu' id={display ? 'hidden' : ''}>
                        <div>
                            <ul>
                                <li><Link className='nav-items' to='/'>HOME</Link></li>
                                <li><Link className='nav-items' to='/aboutus'>ABOUT US</Link></li>
                                <li><Link className='nav-items' to='/services'>SERVICES</Link></li>
                                <li><Link className='nav-items' to='/guide'>GUIDE</Link></li>
                                <li><Link className='nav-items' to='/gallery'>GALLERY</Link></li>
                                <li><Link className='nav-items' to='/doctors'>DOCTORS PANEL</Link></li>
                            </ul>
                        </div>
                        <div className='navbar-menubtn'>
                            <button><Link className='nav-items' to='/apoint'>BOOK AN APOINTMENT</Link></button>
                            <button><Link className='nav-items' to='/feedback'>FEEDBACK</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='slide'>
                <img src={doctors}></img>
            </div>


            <div className='navbar'>
                
            </div> */}



        </div>
    )
}

export default Navbar;
