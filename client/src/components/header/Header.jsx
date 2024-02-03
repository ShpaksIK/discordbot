import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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


function Header({typeMenu}) {
    const getter = () => {
		window.location = 'http://localhost:3000'
	}
	// const sendData = () => {
	// 	const queryParameters = new URLSearchParams(window.location.search)
	// 	const Rcode = queryParameters.get('code')
	// 	axios
	// 		.get('http://localhost:5000/user', {
	// 			params: {
	// 				code: Rcode,
	// 			},
	// 		})
	// 		.then(res => {
	// 			console.log('DATA IS SENDING')
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 		})
    // }

    // useEffect(() => {
	// 	const queryParameters = new URLSearchParams(window.location.search)
	// 	const codeQuery = queryParameters.get('code')
    //     const queryParams = new URLSearchParams(window.location.search);
    //     // const name = queryParams.get('data');
    //     // console.log(name)
        
	// 	axios({
	// 		url: 'http://localhost:5000/user/login/callback',
	// 		params: {
	// 			code: codeQuery
	// 		},
	// 	})
	// })
    // const avatar = queryParams.get('avatar');


    const isLogin = false
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
                        <Link className={style.a} to="/donate">Поддержите нас</Link>
                    </div>
                    <div className={style.header_login}>
                        {isLogin === false && (
                            <a href={linkToAuth}>Войти</a>
                        )}
                        {isLogin === true && (
                            <a href='#'>Аккаунт</a>
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
                                <Link className={style.a} to="/documentation">
                                    <div className={style.header_menu_links_svg}>
                                        <img src={generalSVG} alt='Общее' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>Общее</p></div>
                                </Link>
                                <Link className={style.a} to="/documentation">
                                    <div className={style.header_menu_links_svg}>
                                        <img src={discordSVG} alt='Добавление на сервер' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>Добавление на сервер</p></div>
                                    </Link>
                                <Link className={style.a} to="/documentation">
                                    <div className={style.header_menu_links_svg}>
                                        <img src={commandSVG} alt='Команды' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>Команды</p></div>
                                    </Link>
                                <Link className={style.a} to="/documentation">
                                    <div className={style.header_menu_links_svg}>
                                        <img src={FAQSVG} alt='FAQ' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>FAQ</p></div>
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
                                <Link className={style.a} to="/donate">
                                    <div className={style.header_menu_links_svg}>
                                        <img src={docsSVG} alt='Поддержка' />
                                    </div>
                                    <div className={style.header_menu_links_name}><p>Поддержка</p></div>
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
        </header>
    )
}

export default Header