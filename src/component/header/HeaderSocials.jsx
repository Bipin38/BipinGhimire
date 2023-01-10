import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'

export default function Headersocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/bipin-ghimire-5587311b0/' target="_blank"><FiLinkedin/></a>
        <a href='https://github.com/Bipin38' target="_blank"><FiGithub /></a>
        <a href='https://www.facebook.com/bipin.ghimire.3304' target="_blank"><FiFacebook/></a>
    </div>
  )
}
