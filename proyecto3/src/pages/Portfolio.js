import React from 'react';
import './Portfolio.css';

import Curva from "/imagenes/wave3.png"
import Logo from "/imagenes/DL.png"
import Html from "/imagenes/tecnologia.png"
import Css from "/imagenes/css.png"
import Js from "/imagenes/js.png"
import Chat from "/imagenes/chat.png"
import Web from "/imagenes/tarjetas.png"
import Memoria from "/imagenes/memoria.png"
import Duo from "/imagenes/duo.png"
import Calc from "/imagenes/calculadora.png"
import Mina from "/imagenes/mina.png"

const logo= {"src": Logo}
const curva= {"src": Curva}
const html = {"src": Html}
const css = {"src": Css}
const js = {"src": Js}
const chat = {"src": Chat}
const web= {"src": Web}
const memoria = {"src": Memoria}
const duo = {"src": Duo}
const calc = {"src": Calc}
const mina = {"src": Mina}

function Portfolio() {

    return (
        <div className='genContainerPort'>
             <div className='logoImg'>
                <img src={logo.src}/>
            </div>

            <div className='contLetrasPort'>
                <div className='tituloPort'>
                    Mis proyectos
                </div>

                <div className='textoNoTanGrandePort'>
                    Sé que <i>no son muchos, pero es trabajo honesto</i>, y por algo hay que empezar...    
                </div>

                <div className='proyects'>
                    <div className='proyect'>
                        <div className='proyectPic'>
                            <img src={html.src}/>
                        </div>

                        <div className='proyectText'>
                            <div className='proyectTittle'>
                                HTML Only
                            </div>

                            <div className='proyectDescription'>
                                Creación de una página con
                                <br/>
                                HTML puro
                            </div>

                            <div className='proyectLink'>
                                <a href='http://52.45.209.122:3170/'>
                                    http://52.45.209.122:3170/
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='proyect'>
                        <div className='proyectText'>
                            <div className='proyectTittle'>
                                CSS Only
                            </div>

                            <div className='proyectDescription'>
                                Creación de una imágen solo
                                <br/>
                                con CSS
                            </div>

                            <div className='proyectLink'>
                                <a href='http://52.45.209.122:3180'>
                                    http://52.45.209.122:3180
                                </a>
                            </div>
                        </div>

                        <div className='proyectPic'>
                            <img src={css.src}/>
                        </div>
                    </div>

                    <div className='proyect'>
                        <div className='proyectPic'>
                            <img src={js.src}/>
                        </div>

                        <div className='proyectText'>
                            <div className='proyectTittle'>
                                JS Only Parte 1
                            </div>

                            <div className='proyectDescription'>
                                Creación de la base de un chat
                                <br/>
                                entre la clase
                            </div>

                            <div className='proyectLink'>
                                <a href='http://52.45.209.122:3190/'>
                                    http://52.45.209.122:3190/
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='proyects'>
                    <div className='proyect'>
                        <div className='proyectText'>
                            <div className='proyectTittle'>
                                JS Parte 2
                            </div>

                            <div className='proyectDescription'>
                                Finalización del chat 
                                <br/>
                                entre toda la clase
                            </div>

                            <div className='proyectLink'>
                                <a href='http://52.45.209.122:3200/'>
                                    http://52.45.209.122:3200/
                                </a>
                            </div>
                        </div>

                        <div className='proyectPic'>
                            <img src={chat.src}/>
                        </div>
                    </div>

                    <div className='proyect'>
                        <div className='proyectPic'>
                            <img src={web.src}/>
                        </div>

                        <div className='proyectText'>
                            <div className='proyectTittle'>
                                Web components
                            </div>

                            <div className='proyectDescription'>
                                Creación de cartas de presentación
                                <br/>
                                scon Web Components
                            </div>
                        </div>
                    </div>
                    
                    <div className='proyect'>
                        <div className='proyectText'>
                            <div className='proyectTittle'>
                                Memory Cards
                            </div>

                            <div className='proyectDescription'>
                                Juego de memoria hecho con react
                            </div>

                            <div className='proyectLink'>
                                <a href='https://lab8-web-81227.web.app'>
                                    https://lab8-web-81227.web.app
                                </a>
                            </div>
                        </div>

                        <div className='proyectPic'>
                            <img src={memoria.src}/>
                        </div>
                    </div>
                </div>
                
                <div className='proyects'>
                    <div className='proyect'>
                        <div className='proyectPic'>
                            <img src={duo.src}/>
                        </div>

                        <div className='proyectText'>
                            <div className='proyectTittle'>
                                Recreando una página
                            </div>

                            <div className='proyectDescription'>
                                Recreando la página de Duolingo
                            </div>

                            <div className='proyectLink'>
                                <a href='https://proyecto1-web-60dcf.web.app/'>
                                    https://proyecto1-web-60dcf.web.app/
                                </a>
                            </div>
                        </div>
                    </div>
        
                    <div className='proyect'>
                        <div className='proyectText'>
                            <div className='proyectTittle'>
                                Buscaminas
                            </div>

                            <div className='proyectDescription'>
                                Buscaminas hecho con Angular
                            </div>

                            <div className='proyectLink'>
                                <a href='https://minesweeper-824cd.web.app'>
                                    https://minesweeper-824cd.web.app
                                </a>
                            </div>
                        </div>

                        <div className='proyectPic'>
                            <img src={mina.src}/>
                        </div>
                    </div>

                    <div className='proyect'>
                        <div className='proyectPic'>
                            <img src={calc.src}/>
                        </div>

                        <div className='proyectText'>
                            <div className='proyectTittle'>
                                Calculadora
                            </div>

                            <div className='proyectDescription'>
                                Realización de una calculadora
                            </div>

                            <div className='proyectLink'>
                                <a href='https://lab9-web.web.app'>
                                    https://lab9-web.web.app
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='waveContainerPort'>
                <div className='fondoPort'></div>

                <img src={curva.src}/>
            </div>

            <div className='waveContainerPort2'>
                <div className='fondoPort'></div>

                <img src={curva.src}/>
            </div>
        </div>
    );
}

export default Portfolio;
