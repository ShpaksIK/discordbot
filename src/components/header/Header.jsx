import React from 'react'

import style from './style.module.css'
import botSVG from './../../assets/img/bot.svg'


function Header() {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_burger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <div className={style.header_logo}>
                    <div className={style.header_logo_logo}>
                        {/* <HandySvg src={botSVG} className="icon" width="32" height="32" /> */}
                        <img src={botSVG} alt='TeamBot' />
                        <p>TeamBot</p>
                    </div>
                </div>
                <div className={style.header_links}>
                    <a href='#'>Документация</a>
                    <a href='#'>Команды</a>
                    <a href='#'>Поддержите нас</a>
                </div>
                <div className={style.header_login}>
                    <a href='#'>Войти</a>
                </div>
            </div>
        </div>
    )
}

export default Header