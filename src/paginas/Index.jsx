import React from 'react';
import html from '../imagenes/html5.svg';
import css from '../imagenes/css3.svg';
import js from '../imagenes/js.svg';
import alejo from '../imagenes/alejo.jpg';
import sebastian from '../imagenes/sebastian.jpeg';
import jose from '../imagenes/jose.jpeg';
import andres from '../imagenes/andres.jpg';
import camilo from '../imagenes/camilo.jpeg';

const Index = () => {
  return (

<div> 
{/* Area de la imagen principal */}     
<header class="masthead d-flex align-items-center position-relative vh-100 cover hero">
    <div class="container"> 
        <div class="masthead-subheading">Bienvenidos a DevsFuturistics</div>
        <div class="masthead-heading text-uppercase">Tu software a medida</div>
        <a href="#contactenos"><button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2">Escribenos ahora</button></a>
    </div>
        </header>
 {/* Area de servicios */}   
<section class="page-section" id="services">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Tecnologias que usamos</h2>
            <br />
            <br />
        </div>

        <div class="row text-center">
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src={html} width="100" height="100" alt="html" />
                </span>
                <h4 class="my-3">Html 5</h4>
                <p class="text-muted">HTML5 es la nueva versión de HTML. HTML5 tiene más etiquetas y por lo tanto más opciones de diseño</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src={css} width="100" height="100" alt="css" />
                </span>
                <h4 class="my-3">CSS 3</h4>
                <p class="text-muted">Lenguaje de diseño que permite definir y crear la presentación de un documento escrito en un lenguaje de marcado.</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <img src={js} width="100" height="100" alt="javascript" />
                </span>
                <h4 class="my-3">Javascript</h4>
                <p class="text-muted">Se utiliza principalmente del lado del cliente, permitiendo mejoras en la interfaz de usuario y páginas web dinámicas.</p>
            </div>
        </div>
    </div>
</section>
{/* Area de nosotros */}
<section class="page-section bg-light" id="nosotros">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Nuestro Equipo</h2>
            <br />
        </div>
        <div class="row">
            <div class="col-lg-3">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src={alejo} alt="..." />
                    <h4>Alejandro López</h4>
                    <p class="text-muted">Admin BD</p>
                    </div>
                </div>
            <div class="col-lg-3">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src={camilo} alt="..." />
                    <h4>Camilo Acevedo</h4>
                    <p class="text-muted">Analista</p>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src={andres} alt="..." />
                    <h4>Andres Gutierrez</h4>
                    <p class="text-muted">Desarrollador</p>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src={jose} alt="..." />
                    <h4>Jose Giraldo</h4>
                    <p class="text-muted">Product Owner</p>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src={sebastian} alt="..." />
                    <h4>Sebastián Aguirre</h4>
                    <p class="text-muted">Scrum Master</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* Area de contactenos */}
<section class="bg-primary page-section" id="contactenos">
    <div class="container">
        <div class="text-center text-white">
            <h2 class="section-heading text-uppercase">Contactenos</h2>
            <h3 class="section-subheading ">En breve nos pondremos en contacto con usted.</h3>
        </div>
        <br />
{/* Area de formulario */}        
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div class="row align-items-stretch mb-5">
                <div class="col-md-6">
                    <div class="form-group">
                        <input class="form-control" id="name" type="text" placeholder="Su nombre *" data-sb-validations="required" />
                        <div class="invalid-feedback" data-sb-feedback="name:required">Un nombre es requerido.</div>
                    </div>
                    <div class="form-group">
                        <input class="form-control" id="email" type="email" placeholder="Su Email *" data-sb-validations="required,email" />
                        <div class="invalid-feedback" data-sb-feedback="email:required">Un email es requerido.</div>
                        <div class="invalid-feedback" data-sb-feedback="email:email">El Email no es valido.</div>
                    </div>
                    <div class="form-group mb-md-0">
                        <input class="form-control" id="phone" type="tel" placeholder="Su numero telefónico *" data-sb-validations="required" />
                        <div class="invalid-feedback" data-sb-feedback="phone:required">Un numero telefónico es requerido.</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group form-group-textarea mb-md-0">
                        <textarea class="form-control" id="message" placeholder="Su Mensaje *" data-sb-validations="required"></textarea>
                        <div class="invalid-feedback" data-sb-feedback="message:required">Un mensaje es requerido.</div>
                    </div>
                </div>
            </div>
                   
            <div class="d-none" id="submitSuccessMessage">
                <div class="text-center text-white mb-3">
                    <div class="fw-bolder">Formulario enviado satisfactoriamente!</div>
                            To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
            </div>
                    
            <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">Error al enviar el mensaje!</div>
            </div>
            <div class="text-center"><button class="btn-iniciar-sesion btn btn-outline-primary me-2" id="submitButton" type="submit">Enviar mensaje</button></div>
        </form>
    </div>
</section>


</div>

);
};

export default Index;
