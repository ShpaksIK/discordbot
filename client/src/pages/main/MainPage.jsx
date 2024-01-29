import React from 'react'
import Header from '../../components/header/Header'
import Intro from './intro/Intro'
import AboutBot from './aboutBot/AboutBot'
import AddBot from './addBot/addBot'
import Footer from '../../components/footer/Footer'

import style from './style.module.css'


function MainPage() {
    return (
        <div className={style.main}>
            <Header />
            <Intro />
            <AboutBot />
            <AddBot />
            <Footer />
        </div>
    )
}

export default MainPage