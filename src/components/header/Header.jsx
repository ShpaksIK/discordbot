import React, { useState } from 'react'

import style from './style.module.css'
import botSVG from './../../assets/svg/bot.svg'
import closeSVG from './../../assets/svg/close.svg'
import homeSVG from './../../assets/svg/home.svg'
import docsSVG from './../../assets/svg/docs.svg'
import commandSVG from './../../assets/svg/command.svg'
import logoutSVG from './../../assets/svg/logout.svg'
import loginSVG from './../../assets/svg/login.svg'
import { botName } from '../../api'


function Header() {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const toggleBurger = () => setIsBurgerOpen((isBurgerOpen) => !isBurgerOpen);
    function clickToggleBurger() {
        toggleBurger()
    }
    const isLogin = false

    return (
        <header>
            <div className={style.header}>
                <div className={style.container}>
                    <div className={style.header_burger}>
                        <div className={style.header_burger_spans} onClick={toggleBurger}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>               

                    <div className={style.header_logo}>
                        <a href='#'>
                            <div className={style.header_logo_logo}>
                                {/* <HandySvg src={botSVG} className="icon" width="32" height="32" /> */}
                                <img src={botSVG} alt={botName} />
                                <p>{botName}</p>
                            </div>
                        </a>
                    </div>
                    <div className={style.header_links}>
                        <a href='#'>Документация</a>
                        <a href='#'>Команды</a>
                        <a href='#'>Поддержите нас</a>
                    </div>
                    <div className={style.header_login}>
                        {isLogin === false && (
                            <a href='#'>Войти</a>
                        )}
                        {isLogin === true && (
                            <a href='#'>Аккаунт</a>
                        )}
                    </div>
                </div> 
            </div>

            {isBurgerOpen && (
                <div onClick={clickToggleBurger} className={style.header_menu_block}>
                    <div className={style.header_menu}>
                        <div className={style.header_menu_close} onClick={toggleBurger}>
                            <p>Меню</p>
                            <img src={closeSVG} onClick={toggleBurger} />
                        </div>
                        <div className={style.header_menu_links}>
                            <a href='#'>
                                <div className={style.header_menu_links_svg}>
                                    <img src={homeSVG} alt='Главная' />
                                </div>
                                <div className={style.header_menu_links_name}><p>Главная</p></div>
                            </a>
                            <a href='#'>
                                <div className={style.header_menu_links_svg}>
                                    <img src={docsSVG} alt='Документация' />
                                </div>
                                <div className={style.header_menu_links_name}><p>Документация</p></div>
                            </a>
                            <a href='#'>
                                <div className={style.header_menu_links_svg}>
                                    <img src={commandSVG} alt='Команды' />
                                </div>
                                <div className={style.header_menu_links_name}><p>Команды</p></div>
                            </a>
                            <a href='#'>
                                <div className={style.header_menu_links_svg}>
                                    <img src={docsSVG} alt='Поддержка' />
                                </div>
                                <div className={style.header_menu_links_name}><p>Поддержка</p></div>
                            </a>
                            <div className={style.header_menu_line}></div>
                            {isLogin === false && (
                                <a href='#'>
                                    <div className={style.header_menu_links_svg}>
                                        <img src={loginSVG} alt='Войти' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>Войти</p></div>
                                </a>
                            )}
                            {isLogin === true && (
                                <div className={style.header_menu_down}>
                                    <a className={style.header_menu_logout} href='#'>
                                        <div className={style.header_menu_links_svg}>
                                            <img src={logoutSVG} alt='Выйти' />
                                        </div>
                                        <div className={style.header_menu_links_name}><p>Выйти</p></div>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header