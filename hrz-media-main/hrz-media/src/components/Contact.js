
import React from 'react'
import Styles from '../styles/contact.css'
import { IoIosPin } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Titlu from './Titlu';

const Contact = () => {
  return (
    <div className='bg-slate-200'>

            
    <div className="contact">
      <div className="content">
        <Titlu scris='Contactează-ne'/>
        <p className='mt-16 mb-16'>Dacă dorești să purtăm o conversație fără obligații, ne poți da un mesaj sau ne poți contacta la unele din variantele de mai jos.

        </p>

        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><IoIosPin className="fa-solid fa-location-pin"/></div>
              <div className="text">
                <h3>Adresa</h3>
                <p>București, România</p>
              </div>

            </div>

            <div className="box">
              <div className="icon"><FaPhone className="fa-solid fa-phone"/></div>
              <div className="text">
                <h3 className="tlf">Telefon</h3>
                <p className="nr">0724 050 445</p>
              </div>

            </div>


            <div className="box">
              <div className="icon"><MdEmail className="fa-solid fa-envelope"/></div>
              <div className="text">
                <h3 className="eml">Email</h3>
                <p className="add">contact@hrz-media-consulting.com</p>
              </div>

            </div>

          </div>

          
          <div className="contactForm">
            <form action="https://formsubmit.co/contact@hrz-media-consulting.com" method="POST" autoComplete="off">
              <h2>Trimite un mesaj</h2>
              <div className="inputBox">
                <input type="text" name="name" className="input" required="required"/>
          <span>Username</span>
              </div>
              <div className="inputBox">
                <input type="text" name="company" required="required"/>
                <span>Compania</span>
              </div>
              <div className="inputBox">
                <input type="email" name="email" required="required"/>
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input type="text" name="mesaj" className="input" required="required"/>
                <span>Mesajul dumneavoastra...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Send"/>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>

    </div>
  )
}

export default Contact
