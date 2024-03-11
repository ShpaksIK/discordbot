import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import http from "../../assets/http/index"
import DocMain from '../../pages/documentation/docMain/DocMain'
import Avatar from '../avatar/Avatar'
import style from './style.module.css'
import botSVG from './../../assets/svg/bot.svg'
import closeSVG from './../../assets/svg/close.svg'
import homeSVG from './../../assets/svg/home.svg'
import docsSVG from './../../assets/svg/docs.svg'
import commandSVG from './../../assets/svg/command.svg'
import logoutSVG from './../../assets/svg/logout.svg'
import loginSVG from './../../assets/svg/login.svg'
import arrowSVG from './../../assets/svg/arrow.svg'
import FAQSVG from './../../assets/svg/FAQ.svg'
import discordSVG from './../../assets/svg/discord.svg'
import generalSVG from './../../assets/svg/general.svg'
import { botName, linkToInvite, linkToAuth } from '../../api'
import AuthService from "../../assets/services/authService"
import Cookies from 'js-cookie';
import TokenService from "../../assets/services/token-service";
import $api from "../../assets/http/index";



function Header({ typeMenu }) {
    const [user, setUser] = useState({})
    function red() {
        window.location.replace("http://localhost:8080/api/registration")
    }

    useEffect(async () => {
            const user = await $api.get("http://localhost:8080/api/getData")
            console.log(user)
    }, [])


    const isLogin = false
    const [showDocMain, setShowDocMain] = useState(false)
    const [activeTab, setActiveTab] = useState("")
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)
    const toggleBurger = () => setIsBurgerOpen((isBurgerOpen) => !isBurgerOpen)
    const [isDocMenuOpen, setIsDocMenuOpen] = useState(false)
    const toggleDocMenu = () => setIsDocMenuOpen((isDocMenuOpen) => !isDocMenuOpen)
    const toggleAll = () => {
        if (isDocMenuOpen) {
            toggleDocMenu()
        }
        toggleBurger()
    }
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }
    const changeOption = (opt) => {
        setShowDocMain(true)
        setActiveTab(opt)
    }
    
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
                        <Link className={style.a} to="/">
                            <div className={style.header_logo_logo}>
                                <img src={botSVG} alt={botName} />
                                <p>{botName}</p>
                            </div>
                        </Link>
                    </div>
                    <div className={style.header_links}>
                        <Link className={style.a} to="/documentation">Документация</Link>
                        <Link className={style.a} to="/commands">Команды</Link>
                        <Link className={style.a} to="/contact">Обратная связь</Link>
                    </div>
                    <div className={style.header_login}>
                        {isLogin === false && (
                            <button onClick={red}>Войти</button>
                        )}
                        {isLogin === true && (
                            <Avatar />
                        )}
                    </div>
                </div> 
            </div>

            {isBurgerOpen && (
                <div className={style.header_menu_block}>
                    <div className={style.header_menu} > 
                    {/* animate={{x: [-100, 0]}} */}
                        <div className={style.header_menu_close}>
                            <p>Меню</p>
                            <img src={closeSVG} onClick={toggleBurger} />
                        </div>
                        {isDocMenuOpen && (
                            <div className={style.header_menu_links}>
                                <Link className={style.a} to='/documentation/general'>
                                    <div className={style.header_menu_links_svg}>
                                        <img src={generalSVG} alt='Общее' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>Общее</p></div>
                                </Link>
                                <Link className={style.a} to='/documentation/commands'>
                                    <div className={style.header_menu_links_svg}>
                                        <img src={commandSVG} alt='Команды' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>Команды</p></div>
                                    </Link>
                                <Link className={style.a} to='/documentation/faq'>
                                    <div className={style.header_menu_links_svg}>
                                        <img src={FAQSVG} alt='FAQ' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>FAQ</p></div>
                                </Link>
                                <Link className={style.a} to='/documentation/updates'>
                                    <div className={style.header_menu_links_svg}>
                                        <img src={discordSVG} alt='Изменения' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>Изменения</p></div>
                                </Link>
                                <div className={style.header_menu_line}></div>
                                <a className={style.a} href='#'>
                                    <div className={style.header_menu_links_svg}>
                                        <img src={arrowSVG} style={{rotate: 180 + "deg"}} alt='FAQ' />
                                    </div>
                                    <div className={style.header_menu_links_name} onClick={toggleDocMenu}><p>Назад</p></div>
                                </a>
                            </div>
                        )}
                        {!isDocMenuOpen && (
                            <div className={style.header_menu_links}>
                                <Link className={style.a} to="/">
                                    <div className={style.header_menu_links_svg}>
                                        <img src={homeSVG} alt='Главная' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>Главная</p></div>
                                </Link>
                                {typeMenu === "doc" && (
                                    <a href='#'>
                                        <div className={style.header_menu_links_svg}>
                                            <img src={docsSVG} alt='Документация' />
                                        </div>
                                        <div className={style.header_menu_links_name}><p>Документация</p></div>
                                        <div className={style.header_menu_links_arrow} onClick={toggleDocMenu}><img src={arrowSVG} alt='Документация' /></div>
                                    </a>
                                )}
                                {typeMenu !== "doc" && (
                                    <Link className={style.a} to="/documentation">
                                        <div className={style.header_menu_links_svg}>
                                            <img src={docsSVG} alt='Документация' />
                                        </div>
                                        <div className={style.header_menu_links_name}><p>Документация</p></div>
                                    </Link>
                                )}
                                <Link className={style.a} to="/commands">
                                    <div className={style.header_menu_links_svg}>
                                        <img src={commandSVG} alt='Команды' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>Команды</p></div>
                                </Link>
                                <Link className={style.a} to="/contact">
                                    <div className={style.header_menu_links_svg}>
                                        <img src={docsSVG} alt='Обратная связь' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>Обратная связь</p></div>
                                </Link>
                                <div className={style.header_menu_line}></div>
                                {isLogin === false && (
                                    <a href={linkToAuth}>
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
                        )}
                    </div>
                    <div className={style.header_menu_block_close} onClick={toggleAll}></div>
                </div>
            )}
            {showDocMain && <DocMain activeTab={activeTab} />}
        </header>
    )
}

export default Header