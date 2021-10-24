import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/index.css';
import home from '../imagenes/home.svg';


const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className='imagenHome'>
        <Link to='/'>
        <img src={home} width="40" height="40" alt="arriba"/>
        </Link>
      </div>
    <div>
      {children}
    </div>
    </div>
  );
};

export default AuthLayout;