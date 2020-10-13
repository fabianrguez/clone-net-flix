import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setShow(true) : setShow(false);
    });

    return () => window.removeEventListener('scroll');
  }, []);

  return (
    <div className={`navbar ${show && 'navbar__black'}`}>
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/490px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <img
        className="navbar__avatar"
        src="https://occ-0-3282-358.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABSvOp0oUwV5U7Qacn8Paw4aVoZTdnAJWnqUkM83Ddk1Rx1-xp1r9jBFabf69Nfs44lGpWq-CtO2dEh4Svy7zT4UlkguE.png?r=fcc"
        alt="avatar"
      />
    </div>
  );
}

export default Navbar;
