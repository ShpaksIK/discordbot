import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import style from './style.module.css'


function ProfilePage() {
    return (
        <div className={style.profile}>
            <Header />
            <h1>Profile</h1>
            <Footer />
        </div>
    )
}

export default ProfilePage