import React from 'react';
import './About.css';

import Logo from "/imagenes/DL.png"
import Sql from "/imagenes/sql.png"
import Circuito from "/imagenes/circuito.png"
import Web from "/imagenes/web.png"

const sql= {"src": Sql}
const circuito = {"src": Circuito}
const web = {"src": Web}
const logo= {"src": Logo}

function About() {

    return (
        <div className="genContainer">
            <div className='about'>
                <div className='logoImg'>
                    <img src={logo.src}/>
                </div> 

                <div className='aboutText'>
                    Acerca de mi
                </div>

                <div className='separador'>
                    - º - º - º - º - º - º - º - º - º - º - º - º - º - º - º - º - º - º - º -
                    º - º - º - º - º - º -
                </div>
            </div>

            <div className='infoContainer'>
                <div className='textoGeneral'>
                    Mi nombre completo es <i>Diana Lucía Fernández Villatoro</i> actualmente estoy
                    en tercer año de Ciencias de la Computación en la <b>UVG</b>
                </div>

                <div className='textoNoTanGrande'>
                    Durante estos cinco semestres dentro de la universidad he experimentado varios 
                    campos en los que creo que podría tener un futuro laboral y profesional, sin 
                    embargo todavía no me decido por algún campo específico. Me gusta mucho:
                </div>

                <div className='bulletContainer'>
                    <div className='lilBulletContainer'>
                        <div className='bulletFondo'>
                            <img src={circuito.src}/>
                        </div>

                        <div className='meGustaTexto'>
                            Armar circuitos electrónicos
                        </div>
                    </div>

                    <div className='lilBulletContainer'>
                        <div className='meGustaTexto'>
                            Las bases de datos
                        </div>

                        <div className='bulletFondo'>
                            <img src={sql.src}/>
                        </div>
                    </div>

                    <div className='lilBulletContainer'>
                        <div className='bulletFondo'>
                            <img src={web.src}/>
                        </div>

                        <div className='meGustaTexto'>
                            El desarrollo de Front-end
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
