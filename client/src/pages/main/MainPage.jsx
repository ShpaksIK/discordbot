<<<<<<< HEAD
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

=======
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

>>>>>>> parent of fd34e6f (Получение информации о пользователе)
export default MainPage