import React from 'react';
import logo from '../imagenes/logo.png';
//import { Link } from 'react-router-dom';
import PrivateComponent from '../componentes/PrivateComponent';


import '../estilos/index.css';



const Navbar = () => {
 
    
  
  return (
    <header class="p-3 bg-white text-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img src={logo} alt='imagen' height="70" />

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-item mx-0 mx-lg-2"></li>
          <li class="nav-item mx-0 mx-lg-2"></li>
          <li class="nav-item mx-0 mx-lg-2"></li>
        </ul>

          <div class="text-end">
          <PrivateComponent roleList={["Administrador"]}>  
          <label class=" me-2">Rol Administrador</label>
          </PrivateComponent> {/*Por Corregir para que sea responsive*/}
          <PrivateComponent roleList={["Usuario"]}>  
          <label class=" me-2">Rol Usuario</label>
          </PrivateComponent>
          
                 
           <a href="https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000"><button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2"> 
              Logout</button></a>
              </div>

        </div>
      </div>
    </header>
  );

 
  

  
};


export default Navbar;