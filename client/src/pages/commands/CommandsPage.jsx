import React from 'react'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ComMain from './comMain/ComMain'
import style from './style.module.css'


function Commands() {
    return (
        <div className={style.commands}>
            <Header />
            <ComMain />
            <Footer />
        </div>
    )
}

export default Commands