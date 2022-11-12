import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='mx-auto'>
            
<nav className=" navbar w-100 fixed top-0 z-50 navbar-expand-lg  font-bold navbar-dark bg-orange-400">
  <div className="container text-center ">
    <Link className="navbar-brand text-white-800" href="#">FITNESS CLUB</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse lg:justify-end" id="navbarNav">
      <ul className="navbar-nav lg:mr-20">
        <li className="nav-item">
          <Link to="/home" className="nav-link" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="/service" className="nav-link">Service</Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className="nav-link">Team</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" >Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>





        </div>
    );
};

export default Navbar;
