import React from 'react';
import Navbar2 from '../componentes/Navbar2';
import Footer from '../componentes/Footer';



const PrivateLayout = ({ children }) => {
  return (
    
    <div className='flex w-screen h-screen'>
      <div className='flex flex-nowrap h-full w-full'>
        <Navbar2 />
        <main className='flex w-full bg-blue-500 overflow-y-scroll'>{children}</main>
        <Footer />
      </div>
    </div>
    
  );
};

export default PrivateLayout;