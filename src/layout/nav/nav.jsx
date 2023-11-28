import './nav.css';
import React from 'react'
import logo from '../../assets/SV.png';
import contactImg from '../../assets/contact.png';
import { NavLink } from 'react-router-dom';

export function Nav () {
    return (
        <div className="topnav" id="myTopNav">
            <div className="navName"><img src={logo} alt='logo' className='navLogo'/></div>
            <nav className="navLinks">
                <h3><NavLink to="/" exact activeClassName="active">HOME</NavLink></h3>
                <h3><NavLink to="/about" activeClassName="active">ABOUT</NavLink></h3>
                <h3><NavLink to="/location" activeClassName="active">LOCATION</NavLink></h3>
            </nav>
                <button className='navContactBtn'>
                    <img src={contactImg} alt='contact' className='contactBtnImg' />Contact Me</button>
        </div>
    )
}