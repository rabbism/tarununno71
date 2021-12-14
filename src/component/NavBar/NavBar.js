import React from 'react';
import logo from '../../images/tarunno.png'
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img className='w-50' src={logo} alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-normal">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/donation">Donation</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/event'>Event</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/blog'>Blog</Link>
        </li>
        <li class="nav-item">
          <Link to='/reg'><button className='btn btn-primary'>Register</button></Link>
        </li>
        <li class="nav-item mx-3">
          <Link to='/admin'><button className='btn btn-secondary'>Admin</button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;