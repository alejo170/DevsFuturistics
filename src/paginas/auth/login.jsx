import React from 'react';
import { useHistory } from 'react-router';
import { GoogleLogin } from 'react-google-login';
import cookie from 'react-cookies';
import logo from '../../imagenes/logo.png';
import { useUser } from '../../context/userContext';
import url from '../../componentes/constantes/urlback';



const Login = () => {

  const { setUserData} = useUser();

const responseGoogle = async (response) => {
  console.log('responseGoogle', response);
  if (response.tokenId) {
      try {
          cookie.save('token', response.tokenId);
        
          
        

            const user = await fetch(`${url}/usuarios/crearusuario`, {
                         
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              
              body: JSON.stringify({
                  nombre: response.profileObj.name,
                  identificador: response.profileObj.googleId,
                  email: response.profileObj.email,
                  rol: "Pendiente"
               
              })
          });
        
          const content = await user.json();
          console.log('+++++++++++++++++++', content.user.rol);

          setUserData(content.user.rol);
          
          if (content.user.rol === 'Administrador' || content.user.rol === 'Usuario') {
              history.push('/admin')
              return;
          }
          history.push('/pendiente')

      } catch (error) {
          console.log('error', error);
      }

  }
}

let history = useHistory();



return (
    
<main class="form-signin">
  <form>
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <img src={logo} alt='imagen' height="70" />
    </div>
  </form>
  <br />
  <br />
  <br />
  <br />
  <div className='flex items-center justify-center'>
   
  
      
  <GoogleLogin
    clientId="140250298943-nqib6n80mavkv297laeo09hgnk178i42.apps.googleusercontent.com"
    render={renderProps => (
      <button class="w-100 btn-lg btn-iniciar-sesion" onClick={renderProps.onClick} disabled={renderProps.disabled}>Iniciar Sesion</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
      
 
 </div>
       
   
</main>

);
};
export default Login;