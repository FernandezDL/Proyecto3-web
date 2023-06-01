import React from 'react';
import './Contact.css';

import Wave from '/imagenes/wave1.png';
import Git from '/imagenes/github.png';
import Insta from '/imagenes/instagram.png';
import Telefono from '/imagenes/telefono.png';
import Logo from '/imagenes/DL.png'

const wave ={"src": Wave}
const git ={"src": Git}
const insta ={"src": Insta}
const tel ={"src": Telefono}
const logo = {"src": Logo}

function Contact() {

    return (
        <div className='genContainer'>
            <div className='logoImg'>
                <img src={logo.src}/>
            </div>
            
            <div className='contLetras'>
                <div className='titulo'>
                    Contáctame :)
                </div>

                <div className='textoNoTanGrande'>
                    Encuentrame en cualquiera de estos medios
                </div>

                <div className='redes'>
                    <div className='red'>
                        <div className='redIcon'>
                            <img src={git.src}/>
                        </div>

                        <div className='redInfo'>
                            <div className='redTitulo'>GitHub</div>
                            <div className='redUser'>FernandezDL</div>
                        </div>
                    </div>

                    <div className='red'>
                        <div className='redIcon'>
                            <img src={insta.src}/>
                        </div>

                        <div className='redInfo'>
                            <div className='redTitulo'>Instagram</div>
                            <div className='redUser'>lfernandez.v</div>
                        </div>
                    </div>

                    <div className='red'>
                        <div className='redIcon'>
                            <img src={tel.src}/>
                        </div>

                        <div className='redInfo'>
                            <div className='redTitulo'>Teléfono</div>
                            <div className='redUser'>1-800-NoVoyAPonerMiNúmero</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='waveContainer2'>
                <div className='fondo2'></div>

                <img src={wave.src}/>
            </div>
        </div>
    );
}

export default Contact;
