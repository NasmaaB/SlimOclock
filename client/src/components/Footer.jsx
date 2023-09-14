import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer-container">
    <div className="footer-content">
      <h4>Contactez-nous</h4>
      <p>Email : contact@votreentreprise.com</p>
      <p>Téléphone : +1234567890</p>
    </div>
    <div className="footer-content">
      <h4>Liens Utiles</h4>
      <div className='link-footer'>
        <Link className="link" to="/about">À propos de nous</Link>
        <Link className="link" to="/services">Nos services</Link>
        <Link className="link" to="/contact">Contactez-nous</Link>
        {/* changer les a-href par des links  */}
      </div>
    </div>
  </footer>
  )
}
