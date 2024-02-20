import React from 'react'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import style from './style.module.css'


function Contact() {
    return (
        <div className={style.contact}>
            <Header />
            <Footer />
        </div>
    )
}

export default Contact