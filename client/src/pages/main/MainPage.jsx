import React from 'react'
import Header from '../../components/header/Header'
import Intro from './intro/Intro'
import AboutBot from './aboutBot/AboutBot'

import style from './style.module.css'


function MainPage() {
    return (
        <div className={style.main}>
            <Header />
            <Intro />
            <AboutBot />
        </div>
    )
}

export default MainPage