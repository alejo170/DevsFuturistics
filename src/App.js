import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';
import Index from './paginas/Index';
import Admin from './paginas/admin/Index';
import Login from './paginas/auth/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Clientes from './paginas/admin/Clientes';
import Ventas from './paginas/admin/Ventas';
import RegProductos from './paginas/admin/Productos'
import ProtectedRoute from './componentes/ProtectedRoute';
import Pendiente from "./componentes/pendiente/Pendiente";

import { UserContext } from './context/userContext';
import React, { useState} from 'react';
import PrivateRoute from './componentes/PrivateRoute';

function App() {
  const [userData, setUserData] = useState({});
  return (

    
    <div className='App'>
      <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Switch>
          <Route path={['/admin','/admin/ventas', '/admin/usuarios', '/admin/productos']}>
          
            <PrivateLayout>
              <Switch>
                
                  <Route path='/admin/ventas' exact>
                <PrivateRoute roleList={["Administrador","Usuario"]}>
                    <Ventas />
                </PrivateRoute>    
                  </Route>
                              
                  <Route path='/admin/usuarios' exact>
                <PrivateRoute roleList={["Administrador"]}>
                    <Clientes />
                </PrivateRoute>
                  </Route>
                
                  <Route path='/admin/productos' exact>
                <PrivateRoute roleList={["Administrador"]}>
                    <RegProductos/>
                </PrivateRoute>
                  </Route>
                
                <PrivateRoute roleList={["Administrador","Usuario"]}>
                <ProtectedRoute path='/admin' exact component={Admin} />
                </PrivateRoute> 

              </Switch>
            </PrivateLayout>
            
          </Route>
          <Route path={['/login']}>
            <AuthLayout>
              <Switch>
                <Route path='/login'>
                  <Login />
                </Route>
              </Switch>
            </AuthLayout>
          </Route>

          <Route path={['/pendiente']}>
            <AuthLayout>
              <Switch>
                <Route path='/pendiente'>
                  <Pendiente />
                </Route>
              </Switch>
            </AuthLayout>
          </Route>

          <Route path={['/']}>
            <PublicLayout>

              <Route path='/'>
                <Index />
              </Route>

            </PublicLayout>

          </Route>
       
         
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>

    
  );
}

export default App;