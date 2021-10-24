import { useUser } from '../context/userContext';
import React from 'react';


const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData)) {
    return children;
  }

  return (
  <main class="form-signin">    
    <form>
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
        </div>
        <br />
        <br />
        <br />
        
        <h3>No estás autorizado para ver este sitio.</h3>
        <br />
        <br />
        <br />
    </form>
  
</main> 
  );  
  
};

export default PrivateRoute;