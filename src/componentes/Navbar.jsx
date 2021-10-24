import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';


const Navbar = () => {

  

  return (
    
  <header class="p-3 bg-white text-dark" id="arriba">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <img src={logo} alt='imagen' height="70" />
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-item mx-0 mx-lg-2"><Link to="/" class="nav-link py-3 px-1 px-lg-3 rounded">Inicio</Link></li>
          <li class="nav-item mx-0 mx-lg-2"><a href="#nosotros" class="nav-link py-3 px-1 px-lg-3 rounded">Nosotros</a></li>
          <li class="nav-item mx-0 mx-lg-2"><a href="#contactenos" class="nav-link py-3 px-1 px-lg-3 rounded">Contactenos</a></li>
        </ul>

        <div class="text-end">
          <Link to="/Login">   
            <button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2" >Login</button>
          </Link>     
        </div>
      </div>
    </div>
  </header>

        
  );
};

export default Navbar;