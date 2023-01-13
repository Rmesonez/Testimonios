//import React from 'react'; desde la version 17
// no es necesario este codigo
import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

//props cambiamos el nombre de las propiedades
//y lo hacemos dinamicos

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio'
                src={require(`../images/testimonio-${props.imagen}.png`)}
                alt='Foto de Emma' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className='cargo-testimonio'>
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className='texto-testimonio'>
                    {props.testimonio}
                </p>
            </div>
        </div>    
    );
}
//por defecto
export default Testimonio;

//exportacion nombrada exports function Testimonio() { ... }
//      import { Testimonio } from './componentes/Testimonio.js';


//retos
/* cambiar a negrita partes del texto
    cambiar el valor de alt para cada imagen
    hacerlo responsive
    guardar los props en un archivo diferente
*/
