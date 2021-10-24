import React, { useState, useRef, useEffect } from 'react'
import '../../estilos/index.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Productos = () => {

    const [productos, setProductos] = useState({

        descripcion: '',
        codigobarras: '',
        valor: '',
        estado: ''
    });

    const form = useRef(null);
    const [idBuscar, setIdBuscar] = useState("");
    const [datosProductosBackend, setDatosProductosBackend] = useState([]);
    const [dataProductATabla, setDataProductATabla] = useState([]);
    const [datosProductoAEliminar, setDatosProductoAEliminar] = useState({});
    const [eliminar, setEliminar] = useState(false); //no entiendo
    const [datosProductosAActualizar, setDatosProductosAActualizar] = useState(false);
    const [actualizarProducto, setActualizarProducto] = useState(false);
    const [updateProduct, setUpdateProduct] = useState(false);


    //useEffect para buscar cada vez que se actualiza en el label de buscar
    useEffect(() => {
        console.log("cuadro buscar", idBuscar)
        if (idBuscar !== "") {
            let product = datosProductosBackend.find(buscar => buscar.codigobarras.match(idBuscar));
            product !== undefined ? setDataProductATabla([product]) : setDataProductATabla([])
            console.log(product)
            if (product !== undefined) {
                if (idBuscar === product.codigobarras) {
                    setProductos({
                        descripcion: product.descripcion,
                        codigobarras: product.codigobarras,
                        valor: product.valor,
                        estado: product.estado

                    })
                    toast.info("Producto encontrado");
                }
            }



        } else {
            setDataProductATabla(datosProductosBackend);
        }
        // eslint-disable-next-line
    }, [idBuscar])

    //Función del label para buscar el producto
    const buscarProducto = (e) => {
        e.preventDefault();
        setIdBuscar(e.target.value);
    }


    //Función del si del cuadro de alerta para eliminar un producto
    const deluse = async (e) => {

        console.log("Producto a eliminar", datosProductoAEliminar)

        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/productos/deleteproduct',
            headers: { 'Content-Type': 'application/json' },
            data: datosProductoAEliminar
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        setEliminar(false)
        actualizarDatosTabla();
        toast.success("El Producto  ha sido elminado");
        setIdBuscar("");
        setProductos({
            descripcion: "",
            codigobarras: "",
            valor: "",
            estado: ""

        })
    }

    //función del boton eliminar que avisa a la alerta para que salga
    const eliminarProducto = (e) => {
        e.preventDefault();
        var productdelete = false;
        //    var user = "";
        const fd = new FormData(form.current)
        const nuevoproducto = {};
        fd.forEach((value, key) => {
            nuevoproducto[key] = value;
        })

        datosProductosBackend.forEach((dato) => {
            if (dato.codigobarras === nuevoproducto["idBuscar"]) {
                console.log("se encuentra el producto para ser borrado");
                productdelete = true;
                setDatosProductoAEliminar(nuevoproducto);
                // user = dato.nombre;
            }
        })

        if (productdelete) {
            setEliminar(true)
            // toast.success("El Usuario " + user + " ha sido elminado");

        } else {
            toast.error("Usuario no registrado");
        }

    };

    const producChange = (e) => {
        setProductos({
            ...productos,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name, "  ", e.target.value);
    }


    //Traer todos los usuarios para mostrar en tabla
    function actualizarDatosTabla() {
        const options = {
            method: 'GET',
            url: 'http://localhost:5000/productos/allproducts',
            headers: { 'Content-Type': 'application/json' }
        };

        axios.request(options).then(function (response) {
            setDatosProductosBackend(response.data);
            setDataProductATabla(response.data);
        }).catch(function (error) {
            console.error(error);
        });


        console.log("datos de datosusuariosbackend", datosProductosBackend);
        console.log(dataProductATabla);

    }



    //Effect para actualizar despues de validar
    useEffect(() => {
        actualizarDatosTabla();
        // eslint-disable-next-line
    }, [])
    // eslint-disable-next-line
    useEffect(async () => {
        console.log("la actualizacion esta:", actualizarProducto);
        if (actualizarProducto) {
            console.log("Entro a actualizar")
            console.log("Cambios del usuario", datosProductosAActualizar)
            const options = {
                method: 'PATCH',
                url: 'http://localhost:5000/productos/updateproduct',
                headers: { 'Content-Type': 'application/json' },
                data: datosProductosAActualizar
            };

            await axios.request(options).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });


            actualizarDatosTabla();
            toast.success("El Producto  ha sido actualizado");
            setIdBuscar("");
            setProductos({
                descripcion: "",
                codigobarras: "",
                valor: "",
                estado: ""

            })
        }

        // eslint-disable-next-line
    }, [updateProduct])


    const updateProducto = (e) => {
        e.preventDefault();
        var updateproduct = false;
        const fd = new FormData(form.current)
        const nuevoproducto = {};
        fd.forEach((value, key) => {
            nuevoproducto[key] = value;
        })

        datosProductosBackend.forEach((dato) => {
            if (dato.codigobarras === nuevoproducto["idBuscar"]) {
                console.log("se encuentra el producto para ser actualizado");
                updateproduct = true;
                setDatosProductosAActualizar(nuevoproducto);
            }
        })

        if (updateproduct) {
            setActualizarProducto(true);
            setUpdateProduct(!updateProduct)
        } else {
            toast.error("Usuario no registrado");
        }

    };



    //Creación de producto
    const crearForm = async (e) => {
        e.preventDefault();
        var productregister = true;
        const fd = new FormData(form.current)
        const nuevoproducto = {};
        fd.forEach((value, key) => {
            nuevoproducto[key] = value;
        })

        console.log("Datos del formulario", nuevoproducto);
        console.log("Datos del back", datosProductosBackend);
        //Validacion POR DESARROLLAR
        datosProductosBackend.forEach((data) => {
            console.log("entre al condicional")
            if (data.codigobarras === nuevoproducto["codigobarras"]) {
                console.log("Producto ya registrado");
                toast.error("Producto ya registrado");
                productregister = false;
            }
        })

        console.log("pase al condicional")
        if (productregister) {

            const options = {
                method: 'POST',
                url: 'http://localhost:5000/productos/newproduct',
                headers: { 'Content-Type': 'application/json' },
                data: nuevoproducto
            };

            await axios.request(options).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
            console.log("Producto agregado con éxito")
            toast.success("Producto agregado con éxito");
            actualizarDatosTabla();
            setProductos({
                descripcion: "",
                codigobarras: "",
                valor: "",
                estado: ""

            })
        }

    };


    return (

        <div className="containercam container flex justify-center">

            <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
                <h4>Modificación de productos</h4>
            </div>


            {/* cuadro de alerta para confirmar o no la eliminacion de un producto */}
            <dialog className=" alert-danger" open={eliminar}>
                <div className='contdialog'>
                    <h4 className='text-gray-900 text-2xl font-bold'>
                        ¿Está seguro de querer eliminar el producto?
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



            {/* formulario y botones */}
            <div className="formc col-md-4">

                <form ref={form} onSubmit={crearForm} id="recogidaForm" className="col-md-12  mt-8 max-w-md flex justify-center" novalidate>

                    {/* cuadro para buscar producto */}
                    <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
                        <h6>Buscar Producto</h6>
                    </div>

                    <div className="col-md-12">

                        <div className="col-md-12">
                            <label for="BuscarProducto" className="form-label">Codigo de barras a buscar</label>
                            <input type="text" className="form-control" id="BuscarProducto"
                                name='idBuscar'
                                value={idBuscar}
                                onChange={buscarProducto}

                            />
                        </div>

                    </div>


                    <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
                        <h6>Llenar Para Agregar O Modificar</h6>
                    </div>


                    <div className="col-md-12">
                        <label>Descripción</label>
                        <input
                            type="text"
                            className="form-control"
                            id="descripcion"
                            placeholder="Ingresar descripcion breve" required
                            name='descripcion'
                            value={productos.descripcion}
                            onChange={producChange} />

                    </div>

                    <div className="col-md-12">
                        <label>Codigo de Barras</label>
                        <input
                            type="text"
                            className="form-control"
                            id="codigobarras"
                            placeholder="Ingresar el codigo de barras" required
                            name='codigobarras'
                            value={productos.codigobarras}
                            onChange={producChange} />

                    </div>

                    <div className="col-md-12">
                        <label>Valor Unitario</label>
                        <input
                            type="number"
                            className="form-control"
                            id="valor"
                            placeholder="Ingresar solo numeros" required
                            name='valor'
                            value={productos.valor}
                            onChange={producChange} />
                    </div>

                    <div className="col-md-12">
                        <label>Estado</label>
                        <select name="estado" onChange={producChange} className="form-select" id="estado" required>
                            <option selected disabled value="">Elegir</option>
                            <option value="Disponible">Disponible</option>
                            <option Value="No Disponible">No Disponible</option>
                        </select>
                    </div>

                    <div className="contbotonespro col-md-12 " >
                        <button className="btn btn-success mx-auto" id="botonAgregarPro" type="submit">Agregar</button>
                        <button onClick={updateProducto} className="btn btn-primary mx-auto" id="botonActualizarPro" type="submit">Actualizar</button>
                        <button onClick={eliminarProducto} className="btn btn-danger mx-auto" id="botonEliminarPro" type="submit">Eliminar</button>

                        <div className="botonCancelarPro">
                            <div className="contbotones2 col-md-12 ">
                                <Link to='/admin'><button className="btn btn-dark mx-auto" id="botonAtrasPro" type="button">Atras</button></Link>
                            </div>
                        </div>
                    </div>

                </form>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000} />

            </div>


            <div className="contTabla col-md-7 ">
                <table id="inventarioProductos" class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Descripción</th>
                            <th scope="col">Codigo De Barras</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataProductATabla.map((pro) => {
                                return (
                                    <tr>
                                        <td>{pro.descripcion}</td>
                                        <td>{pro.codigobarras}</td>
                                        <td>{pro.valor}</td>
                                        <td>{pro.estado}</td>
                                    </tr>
                                )

                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
};

export default Productos
