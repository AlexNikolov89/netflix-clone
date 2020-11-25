import React, { useEffect, useState } from 'react'
import logo from './images/logo.jpg'
import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img className='nav_logo'
            src={logo} alt='Netflix Logo' />
        </div>
    )
}

export  default Nav;
