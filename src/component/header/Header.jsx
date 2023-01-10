import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/photo-own6lguhZ-transformed.png'
import Headersocials from './HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Bipin Ghimire</h1>
        <h5 className='text-light'>Computer Engineer</h5>
        <CTA />
        <Headersocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}
