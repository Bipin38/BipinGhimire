import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import './footer.css'


export default function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Bipin</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>about</a></li>
        <li><a href='#experience'>experience</a></li>
        <li><a href='#portfolio'>portfolio</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><AiFillInstagram/></a>
        <a href='https://twitter.com'><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bipin Ghimire. All rights reserved.</small>
      </div>
    </footer>
  )
}
