import React from 'react';
import LogoPhoto from './assets/images/logo-provi.png'
// import style from '../assets/style/style.css';
// import UserPhoto from '../assets/images/Profile.jpg'

const Navbar = () =>{
    return (
        // <nav>
        // <img src={LogoPhoto} alt='Logo da provi' className='logo' />
        
        // </nav>
        <nav className="navbar navbar-light bg-light">
        <img src={LogoPhoto} alt='Logo da provi' className='logo' />
      </nav>
     
    )
}

export default Navbar;