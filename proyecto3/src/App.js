import React, { Component, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
    const [ruta, setRuta] = useState('/')

    let component

    const modificar = (nuevaRuta) => {
        setRuta(nuevaRuta)
        console.log(ruta)
    }

    switch(ruta){
        case "/home":
            component= <Home/>
        break

        case "/about":
            component= <About/>
        break

        case "/contacto":
            component= <Contact/>
        break

        case "/portafolio":
            component=<Portfolio/>
        break

        default:
            component= <Home/>
        break
    } 

    return (
        <>
            <div className='navContainer'>
                <Navbar modificar={modificar}/>
            </div>

            {component}
        </>
    );
}

export default App;