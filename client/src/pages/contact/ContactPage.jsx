import React from 'react'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import style from './style.module.css'
import ContactForm from './contactForm/ContactForm'
import ContactFAQ from './contactFAQ/ContactFAQ'


function Contact() {
    return (
        <div className={style.contact}>
            <Header />
            <div className={style.contactMain}>
                <ContactForm />
                <ContactFAQ />
            </div>
            <Footer />
        </div>
    )
}

export default Contact