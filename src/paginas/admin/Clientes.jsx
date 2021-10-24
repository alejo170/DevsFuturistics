import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Clientes = () => {


  const [usuario, setUsuario] = useState({
    
    nombre: '',
    identificador: '',
    email: '',
    rol: ''
  });
  const form = useRef(null);
  const [datauser, setDatauser] = useState([]);
  const [datosUsuariosBackend, setDatosUsuariosBackend] = useState([]);
  const [cedulaB, setCedulaB] = useState("");
  const [upduser, setupduser] = useState(false);
  const [eliminar, setEliminar] = useState(false);
  const [userdel, setuserdel] = useState({});
  const [userupdate, setUserupdate] = useState({});
  const [acutualizarusuario, setacutualizarusuario] = useState(false);



  useEffect(() => {
    if (cedulaB !== "") {
      let users = datosUsuariosBackend.find(buscar => buscar.identificador.match(cedulaB));
      users !== undefined ? setDatauser([users]) : setDatauser([])
      console.log(users)
      if (users !== undefined) {
        if (cedulaB === users.identificador) {
          setUsuario({
            nombre: users.nombre,
            identificador: users.identificador,
            email: users.email,
            rol: users.rol

          })
          toast.info("Usuario encontrado");
        }
      }



    } else {
      setDatauser(datosUsuariosBackend);
    }
// eslint-disable-next-line
  }, [cedulaB])

  const buscarUsuario = (e) => {
    e.preventDefault();
    setCedulaB(e.target.value);
  }

  const deluse = async (e) => {

    console.log("Usuario a eliminar", userdel)

    const options = {
      method: 'DELETE',
      url: 'http://localhost:5000/usuarios/deleteuser',
      headers: { 'Content-Type': 'application/json' },
      data: userdel
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

    setEliminar(false)
    actualizarDatosback();
    toast.success("El Usuario  ha sido elminado");
    setCedulaB("");
    setUsuario({
      nombre: "",
      identificador: "",
      email: "",
      rol: ""

    })
  }
// eslint-disable-next-line
  const upduse = async (e) => {
    console.log("Entro a actualizar")
    console.log("Cambios del usuario", userupdate)
    const options = {
      method: 'PATCH',
      url: 'http://localhost:5000/usuarios/update/',
      headers: { 'Content-Type': 'application/json' },
      data: userupdate
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });


    actualizarDatosback();
    toast.success("El Usuario  ha sido actualizado");
    setCedulaB("");
    setUsuario({
      nombre: "",
      identificador: "",
      email: "",
      rol: ""

    })
  }

  function actualizarDatosback() {
    const options = {
      method: 'GET',
      url: 'http://localhost:5000/usuarios/allusers',
      headers: { 'Content-Type': 'application/json' }
    };

    axios.request(options).then(function (response) {
      setDatosUsuariosBackend(response.data);
      setDatauser(response.data);
    }).catch(function (error) {
      console.error(error);
    });


    console.log("datos de datosusuariosbackend", datosUsuariosBackend);
    console.log(datauser);

  }

  useEffect(() => {
    actualizarDatosback();
// eslint-disable-next-line
  }, [])
// eslint-disable-next-line
  useEffect(async () => {
    console.log("la actualizacion esta:", acutualizarusuario);
    if (acutualizarusuario) {
      console.log("Entro a actualizar")
      console.log("Cambios del usuario", userupdate)
      const options = {
        method: 'PATCH',
        url: 'http://localhost:5000/usuarios/update/',
        headers: { 'Content-Type': 'application/json' },
        data: userupdate
      };

      await axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });


      actualizarDatosback();
      toast.success("El Usuario  ha sido actualizado");
      setCedulaB("");
      setUsuario({
        nombre: "",
        identificador: "",
        email: "",
        rol: ""

      })
    }

// eslint-disable-next-line
  }, [upduser])





  const usuChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, "  ", e.target.value);
  }

//  const actualizarDatos = () => {

//    console.log("Usuario: ", usuario.nombre, "Cedula: ", usuario.cedula);
//    toast.success("Usuario actualizado con éxito")
//  }


//  const agregarUsuario = (e) => {
//    e.preventDefault();
    // toast.success("Usuario agregado con éxito")


    // setDatauser([...datauser, {
    //   nombre: usuario.nombre,
    //   cedula: usuario.cedula,
    //   email: usuario.email,
    //   rol: usuario.rol
    // },]);

//    actualizarDatosback();

//  };



  const actualizarUsuario = (e) => {
    e.preventDefault();
    var userupdate = false;
    const fd = new FormData(form.current)
    const nuevousuario = {};
    fd.forEach((value, key) => {
      nuevousuario[key] = value;
    })

    datosUsuariosBackend.forEach((dato) => {
      if (dato.identificador === nuevousuario["cedulaB"]) {
        console.log("se encuentra el usuario para ser actualizado");
        userupdate = true;
        setUserupdate(nuevousuario);
      }
    })

    if (userupdate) {
      setacutualizarusuario(true);
      setupduser(!upduser)
    } else {
      toast.error("Usuario no registrado");
    }

  };

  const eliminarUsuario = (e) => {
    e.preventDefault();
    var userdelete = false;
//    var user = "";
    const fd = new FormData(form.current)
    const nuevousuario = {};
    fd.forEach((value, key) => {
      nuevousuario[key] = value;
    })

    datosUsuariosBackend.forEach((dato) => {
      if (dato.identificador === nuevousuario["cedulaB"]) {
        console.log("se encuentra el usuario para ser borrado");
        userdelete = true;
        setuserdel(nuevousuario);
        // user = dato.nombre;
      }
    })

    if (userdelete) {
      setEliminar(true)
      // toast.success("El Usuario " + user + " ha sido elminado");

    } else {
      toast.error("Usuario no registrado");
    }

  };


  const submitForm = async (e) => {
    e.preventDefault();
    var userregister = true;
    const fd = new FormData(form.current)
    const nuevousuario = {};
    fd.forEach((value, key) => {
      nuevousuario[key] = value;
    })

    console.log("Datos del formulario", nuevousuario);
    console.log("Datos del back", datosUsuariosBackend);
    //Validacion
    datosUsuariosBackend.forEach((dato) => {
      if (dato.email === nuevousuario["email"] || dato.identificador === nuevousuario["identificador"]) {
        console.log("Usuario ya registrado");
        toast.error("Usuario ya registrado");
        userregister = false;
      }
    })

    if (userregister) {

      const options = {
        method: 'POST',
        url: 'http://localhost:5000/usuarios/newuser',
        headers: { 'Content-Type': 'application/json' },
        data: nuevousuario
      };

      await axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      console.log("Usuario agregado con éxito")
      toast.success("Usuario agregado con éxito");
      actualizarDatosback();
      setUsuario({
        nombre: "",
        identificador: "",
        email: "",
        rol: ""

      })
    }


  };


  

  return (


    <div className="containercam container flex justify-center">



      <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
        <h4>Modificación de usuario</h4>
      </div>

      <dialog className=" alert-danger" open={eliminar}>
        <div className='contdialog'>
          <h4 className='text-gray-900 text-2xl font-bold'>
            ¿Está seguro de querer eliminar el usuario?
          </h4>
          <div className='contdialogbot'>
            <button
              onClick={() => deluse()}
              className='btn btn-success mx-auto'
            >
              Sí
            </button>
            <button
              onClick={() => setEliminar(false)}
              className='btn btn-danger mx-auto'
            >
              No
            </button>
          </div>
        </div>
      </dialog>


      <div className="formc col-md-4">


        <form ref={form} onSubmit={submitForm} className="col-md-12  mt-8 max-w-md flex justify-center" novalidate>


          <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
            <h6>Buscar usuarios</h6>
          </div>

          <div className="col-md-12">

            <div className="col-md-12">
              <label for="BuscarCedula" className="form-label">Numero de identificador a buscar</label>
              <input type="text" className="form-control" id="BuscarCedula"
                name='cedulaB'
                value={cedulaB}
                onChange={buscarUsuario}

              />
            </div>

          </div>


          <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
            <h6>Agregar o actualizar usuarios</h6>
          </div>

          <div className="col-md-12">
            <label for="username" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control" id="username"
              placeholder="debes ingresar el nombre" required
              name='nombre'
              value={usuario.nombre}
              onChange={usuChange}
            />

          </div>

          <div className="col-md-12">
            <label for="username" className="form-label">Identificador</label>
            <input type="text" className="form-control" id="username"
              placeholder="debes ingresar el identificador" required
              name='identificador'
              value={usuario.identificador}
              onChange={usuChange}
            />

          </div>

          <div className="col-md-12">
            <label for="validationCustomUsername" className="form-label">Email</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
              <input type="email" className="form-control" id="validationCustomUsername"
                aria-describedby="inputGroupPrepend" required
                name='email'
                value={usuario.email}
                onChange={usuChange} />
            </div>
          </div>
          <div className="col-md-9">
            <label for="validationCustom04" className="form-label">Rol</label>
            <select name='rol' onChange={usuChange} className="form-select" id="validationCustom04" required>
              <option selected disabled value="">Choose...</option>
              <option value="Administrador">Administrador</option>
              <option value="Usuario">Usuario</option>
            </select>
          </div>
          <div className="contbotones col-md-12 " >
            <button className="btn btn-success mx-auto" type="submit" name='botonAgregar'  >Agregar</button>
            <button className="btn btn-primary mx-auto " type="button" name='botonActualizar' onClick={actualizarUsuario}    >Actualizar</button>
            <button className="btn btn-danger mx-auto"  id="botonEliminar" type="button" onClick={eliminarUsuario} >Eliminar</button>
            
          </div>
          <div className="contbotones2 col-md-12 " >
            <Link to="/admin"><button className="btn btn-dark mx-auto" id="botonCancelar" type="button">Atrás</button>
            </Link>

          </div>
        </form>
        <ToastContainer
          position="bottom-center"
          autoClose={5000} />
      </div>

      <div className="contTabla col-md-7 ">
        <table class="table table-striped">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              
              <th scope="col">Nombre</th>
              <th scope="col">Identificador</th>
              <th scope="col">Email</th>
              <th scope="col">Rol</th>
            </tr>
          </thead>
          <tbody>
            {
              datauser.map((usr) => {
                return (
                  <tr>
                    
                    <td>{usr.nombre}</td>
                    <td>{usr.identificador}</td>
                    <td>{usr.email}</td>
                    <td>{usr.rol}</td>
                  </tr>
                )

              }
              )
            }
          </tbody>
        </table>
      </div>




    </div>


  );
};

export default Clientes;