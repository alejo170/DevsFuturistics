
import { Link } from 'react-router-dom';

const Ventas = () => {

  return (

    <div className="containercam container flex justify-center">

        <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
            <h4>Registrar Venta - Modulo actualmente en construccion</h4>
        </div>


        {/* formulario y botones */}
        <div className="formc col-md-4">

            <form id="recogidaForm" className="col-md-12  mt-8 max-w-md flex justify-center" novalidate>

                {/* cuadro para buscar producto */}
                <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
                    <h6>Buscar Venta</h6>
                </div>

                <div className="col-md-12">

                    <div className="col-md-12">
                        <label for="BuscarProducto" className="form-label">Buscar por ID</label>
                        <input type="text" className="form-control" id="BuscarProducto"
                            name='idBuscar' />
                    </div>

                </div>


                <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
                    <h6>Llenar Para Agregar O Modificar</h6>
                </div>


                <div className="col-md-12">
                    <label>Fecha</label>
                    <input
                        type="date"
                        className="form-control"
                        id="fecha"
                        placeholder="Ingrese la fecha" required
                        name='fecha'
                         />

                </div>

                <div className="col-md-12">
                    <label>Cantidad</label>
                    <input
                        type="number"
                        className="form-control"
                        id="cantidad"
                        placeholder="Ingrese la cantidad" required
                        name='cantidad'
                         />

                </div>

               
                <div className="col-md-12">
                    <label>Vendedor</label>
                    <select name="estado" className="form-select" id="estado" required>
                        <option selected disabled value="">Elegir</option>
                        <option >Usuario 1</option>
                        <option >Usuario 2</option>
                    </select>
                </div>
                <br />  
                <div className="contbotonespro col-md-12 " >
                
                   
                    
                    
                    
                </div>

            </form>
            <button className="btn btn-success mx-auto" id="boton">Agregar</button>
            <button  className="btn btn-primary mx-auto" id="boton" type="submit">Actualizar</button>
            <button  className="btn btn-danger mx-auto" id="boton" type="submit">Eliminar</button>
            <Link to='/admin'><button className="btn btn-dark mx-auto" id="botonAtrasPro" type="button">Atras</button></Link>
        </div>


        <div className="contTabla col-md-7 ">
            <table id="inventarioProductos" class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    </div>

)
  
};

export default Ventas; 
