import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'


export default function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__icon'/>
            <h4>Email</h4>
            <h5>Bipinghimire2072@gmail.com</h5>
            <a href='mailto:bipinghimire2072@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__icon'/>
            <h4>Messenger</h4>
            <h5>Bipin Ghimire</h5>
            <a href='https://m.me/bipin.ghimire.3304' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__icon'/>
            <h4>WhatsApp</h4>
            <h5>9860015292</h5>
            <a href='https://api.whatsapp.com/send?phone=9860015292' target='_blank'>Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button typeof='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}
