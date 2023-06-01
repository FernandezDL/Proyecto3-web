import React from 'react';
import './Home.css';

import Curva1 from "/imagenes/wave.png"
import Logo from "/imagenes/DL.png"
import Yo from "/imagenes/yo.png"

const logo= {"src": Logo}
const curva= {"src": Curva1}
const yo= {"src": Yo}

function Home() {

    return (
        <div className='fullContainer'>
            <div className='logoImg'>
                <img src={logo.src}/>
            </div> 
            
            <div className='principalContainer'>
                <div className='letrasContainer'>
                    <div className='letrasVerContainer'>
                        <div className='holaTexto'>
                            ¡Hola!
                        </div>

                        <div className='letrasHorContainer'>
                            <div className='holaTexto'>
                                Mi nombre es
                            </div>

                            <div className='nombreTexto'>
                                Diana :D
                            </div>
                        </div>
                    </div>

                    <div className='letrasVerContainer'>
                        <div className='letrasHorContainer2'>
                            <div className='explicacion'>
                                Soy una desarrolladora de 
                            </div>

                            <div className='nombreTexto2'>
                                Font-End
                            </div>
                        </div>

                        <div className='explicacion'>
                            en proceso...
                        </div>
                    </div>

                    <div className='letrasVerContainer'>
                        <div className='ultimoTexto'>
                            Acompáñame a ver mi viaje hasta
                        </div>

                        <div className='ultimoTexto'>
                            la actualidad en este mundo
                        </div>
                    </div>
                </div>

                <div className='pic'>
                    <img src={yo.src}/>
                </div>
            </div>

            <div className='waveContainer'>
                <img src={curva.src}/>

                <div className='fondo'></div>
            </div>
        </div>
    );
}

export default Home;
