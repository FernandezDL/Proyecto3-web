import React, { useState } from 'react';
import './Navbar.css';

import Home from 'imagenes/home.png';
import HomeHover from 'imagenes/homeHover.png';
import Person from 'imagenes/Person.png';
import PersonHover from 'imagenes/PersonHover.png';
import Contact from 'imagenes/contacto.png';
import ContactHover from 'imagenes/contactoHover.png';
import Maletin from 'imagenes/maletin.png';
import MaletinHover from 'imagenes/maletinHover.png';

function Navbar({modificar}) {
  const [buttonHover, setButtonHover] = useState({
    home: false,
    person: false,
    maletin: false,
    contacto: false
  });

  const handleMouseEnter = (button) => {
    setButtonHover((prevState) => ({ ...prevState, [button]: true }));
  };

  const handleMouseLeave = (button) => {
    setButtonHover((prevState) => ({ ...prevState, [button]: false }));
  };

  return (
    <>
      <div className='nav'>
        <ul>
          <li className={`navButton ${buttonHover.home ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={() => handleMouseLeave('home')}
            onClick={() => modificar('/home')}>
              <img src={buttonHover.home ? HomeHover : Home} alt="Home" />
          </li>

          <li className={`navButton ${buttonHover.person ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('person')}
            onMouseLeave={() => handleMouseLeave('person')}
            onClick={() => modificar('/about')}>
              <img src={buttonHover.person ? PersonHover : Person} alt="Person" />
          </li>

          <li className={`navButton ${buttonHover.maletin ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('maletin')}
            onMouseLeave={() => handleMouseLeave('maletin')}
            onClick={() => modificar('/portafolio')}>
              <img src={buttonHover.maletin ? MaletinHover : Maletin} alt="Maletin" />
          </li>

          <li className={`navButton ${buttonHover.contacto ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('contacto')}
            onMouseLeave={() => handleMouseLeave('contacto')}
            onClick={() => modificar('/contacto')}>
                <img src={buttonHover.contacto ? ContactHover : Contact} alt="Contact" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
