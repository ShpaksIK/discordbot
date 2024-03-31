import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ServerMain from './serverMain/ServerMain'

import style from './style.module.css'


function ServerPage() {
    return (
        <div className={style.server}>
            <Header />
            <ServerMain />
            <Footer />
        </div>
    )
}

export default ServerPage