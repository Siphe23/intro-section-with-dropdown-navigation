import React from 'react';
import './Footer.css';
import Databiz from './images/client-databiz.svg';
import Audio from './images/client-audiophile.svg';
import Meet from './images/client-meet.svg';
import Maker from './images/client-maker.svg';

function Footer() {
  return (
    <div className="main-footer">

      <div className="footer-links">
        <a href="#"><img src={Databiz} alt="Databiz" /></a>
        <a href="#"><img src={Audio} alt="Audiophile" /></a>
        <a href="#"><img src={Meet} alt="Meet" /></a>
        <a href="#"><img src={Maker} alt="Maker" /></a>
      </div>
    </div> 
  );
}

export default Footer;
