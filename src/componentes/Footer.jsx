import React from 'react';
import trello from '../imagenes/trello.svg';
import github from '../imagenes/github.svg';
import arriba from '../imagenes/arriba.svg';

const Footer = () => {
  return (
    <div>
        <footer class="bg-white text-center py-5">
            <div class="container px-5">
                <div class="text-black">
                    <div class="mb-2">&copy; DevsFuturistics 2021. Todos los derechos reservados.</div>
                        <a href="https://trello.com/b/Y4wn6CMe/devs-futuristics" target="_blank" rel="noreferrer">
                            <img src={trello} width="40" height="40" alt="trello"/>
                        </a>
                    
                        <span class="mx-1">&middot;</span>
                        <a href="https://github.com/SebasAguirre979/DevsFuturistics" target="_blank" rel="noreferrer">
                            <img src={github} width="40" height="40" alt="github"/>
                        </a>
                        <span class="mx-1">&middot;</span>
                        <a href="#arriba">
                            <img src={arriba} width="40" height="40" alt="arriba"/>
                        </a>
                </div>
            </div>
        </footer>

</div>
);
};



export default Footer;