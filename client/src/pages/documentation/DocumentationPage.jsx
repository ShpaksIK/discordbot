import React from 'react'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Navbar from './navbar/Navbar'
import DocMain from './docMain/DocMain'
import style from './style.module.css'


function DocumentationPage() {
    return (
        <div className={style.documentation}>
            <Header typeMenu="doc" />
            <Navbar />
            <Footer />
        </div>
    )
}

export default DocumentationPage