import React from 'react';
import { Link } from 'react-router-dom';
import RegistrarPNG from '../../imagenes/Registrar.png';
import PrivateComponent from '../../componentes/PrivateComponent';


const Admin = () => {
  
  return (
    <div className='flex w-screen h-screen'>
      <div class="text-center">

        <PrivateComponent roleList={["Administrador", "Usuario"]}>
        <Link to="/admin/ventas"><button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2"><img src={RegistrarPNG} alt="imagen" height="70" />Registrar Ventas</button>
        </Link>
        </PrivateComponent>

        <PrivateComponent roleList={["Administrador"]}>
        <Link to="/admin/usuarios"><button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2"><img src={RegistrarPNG} alt="imagen" height="70" />Modificar Usuarios</button>
        </Link>
        </PrivateComponent>
        
        <PrivateComponent roleList={["Administrador"]}>
        <Link to="/admin/productos"><button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2"><img src={RegistrarPNG} alt="imagen" height="70" />Registrar Productos</button>
        </Link>
        </PrivateComponent>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </div>

  

  );
};

export default Admin;