import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { botName, linkToAuth } from '../../api'
import FAQSVG from './../../assets/svg/FAQ.svg'
import arrowSVG from './../../assets/svg/arrow.svg'
import closeSVG from './../../assets/svg/close.svg'
import commandSVG from './../../assets/svg/command.svg'
import discordSVG from './../../assets/svg/discord.svg'
import docsSVG from './../../assets/svg/docs.svg'
import generalSVG from './../../assets/svg/general.svg'
import homeSVG from './../../assets/svg/home.svg'
import loginSVG from './../../assets/svg/login.svg'
import logoutSVG from './../../assets/svg/logout.svg'
import style from './style.module.css'

function Header({ typeMenu }) {
	let userAvatar = ''
	let flag = true
	const getter = () => {
		window.location.assign(linkToAuth).then(res => {
			next()
		})
	}
	const sendData = () => {}

	function next() {
		console.log('Awd')
		if (flag === true) {
			const queryParameters = new URLSearchParams(window.location.search)
			const codeQuery = queryParameters.get('code')

			let res = axios({
				url: 'http://localhost:8080/user/login/callback',
				params: {
					code: codeQuery,
				},
			})
			if (res) {
				flag = false
			}
		}
	}
	const [haveImage, setImage] = useState('')
	const image = () => {
		setImage(userAvatar)
		console.log(haveImage)
	}
	const isLogin = false
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)
	const toggleBurger = () => setIsBurgerOpen(isBurgerOpen => !isBurgerOpen)
	const [isDocMenuOpen, setIsDocMenuOpen] = useState(false)
	const toggleDocMenu = () => setIsDocMenuOpen(isDocMenuOpen => !isDocMenuOpen)
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
						<Link className={style.a} to='/'>
							<div className={style.header_logo_logo}>
								<img src={haveImage} alt={botName} />
								<p>{botName}</p>
							</div>
						</Link>
					</div>
					<div className={style.header_links}>
						<Link className={style.a} to='/documentation'>
							Документация
						</Link>
						<img src={userAvatar} alt='' />
						<Link className={style.a} to='/commands'>
							Команды
						</Link>
						<Link className={style.a} to='/donate'>
							Поддержите нас
						</Link>
					</div>
					<div className={style.header_login}>
						{isLogin === false && <button onClick={getter}>Войти</button>}

						{isLogin === true && <a href='#'>Аккаунт</a>}
					</div>
				</div>
			</div>

			{isBurgerOpen && (
				<div className={style.header_menu_block}>
					<motion.div className={style.header_menu} animate={{ x: [-100, 0] }}>
						<div className={style.header_menu_close}>
							<p>Меню</p>
							<img src={closeSVG} onClick={toggleBurger} />
						</div>
						{isDocMenuOpen && (
							<div className={style.header_menu_links}>
								<Link className={style.a} to='/documentation'>
									<div className={style.header_menu_links_svg}>
										<img src={generalSVG} alt='Общее' />
									</div>
									<div className={style.header_menu_links_name}>
										<p>Общее</p>
									</div>
								</Link>
								<Link className={style.a} to='/documentation'>
									<div className={style.header_menu_links_svg}>
										<img src={discordSVG} alt='Добавление на сервер' />
									</div>
									<div className={style.header_menu_links_name}>
										<p>Добавление на сервер</p>
									</div>
								</Link>
								<Link className={style.a} to='/documentation'>
									<div className={style.header_menu_links_svg}>
										<img src={commandSVG} alt='Команды' />
									</div>
									<div className={style.header_menu_links_name}>
										<p>Команды</p>
									</div>
								</Link>
								<Link className={style.a} to='/documentation'>
									<div className={style.header_menu_links_svg}>
										<img src={FAQSVG} alt='FAQ' />
									</div>
									<div className={style.header_menu_links_name}>
										<p>FAQ</p>
									</div>
								</Link>
								<div className={style.header_menu_line}></div>
								<a className={style.a} href='#'>
									<div className={style.header_menu_links_svg}>
										<img
											src={arrowSVG}
											style={{ rotate: 180 + 'deg' }}
											alt='FAQ'
										/>
									</div>
									<div
										className={style.header_menu_links_name}
										onClick={toggleDocMenu}
									>
										<p>Назад</p>
									</div>
								</a>
							</div>
						)}
						{!isDocMenuOpen && (
							<div className={style.header_menu_links}>
								<Link className={style.a} to='/'>
									<div className={style.header_menu_links_svg}>
										<img src={homeSVG} alt='Главная' />
									</div>
									<div className={style.header_menu_links_name}>
										<p>Главная</p>
									</div>
								</Link>
								{typeMenu === 'doc' && (
									<a href='#'>
										<div className={style.header_menu_links_svg}>
											<img src={docsSVG} alt='Документация' />
										</div>
										<div className={style.header_menu_links_name}>
											<p>Документация</p>
										</div>
										<div
											className={style.header_menu_links_arrow}
											onClick={toggleDocMenu}
										>
											<img src={arrowSVG} alt='Документация' />
										</div>
									</a>
								)}
								{typeMenu !== 'doc' && (
									<Link className={style.a} to='/documentation'>
										<div className={style.header_menu_links_svg}>
											<img src={docsSVG} alt='Документация' />
										</div>
										<div className={style.header_menu_links_name}>
											<p>Документация</p>
										</div>
									</Link>
								)}
								<Link className={style.a} to='/commands'>
									<div className={style.header_menu_links_svg}>
										<img src={commandSVG} alt='Команды' />
									</div>
									<div className={style.header_menu_links_name}>
										<p>Команды</p>
									</div>
								</Link>
								<Link className={style.a} to='/donate'>
									<div className={style.header_menu_links_svg}>
										<img src={docsSVG} alt='Поддержка' />
									</div>
									<div className={style.header_menu_links_name}>
										<p>Поддержка</p>
									</div>
								</Link>
								<div className={style.header_menu_line}></div>
								{isLogin === false && (
									<a href={linkToAuth}>
										<div className={style.header_menu_links_svg}>
											<img src={loginSVG} alt='Войти' />
										</div>
										<div className={style.header_menu_links_name}>
											<p>Войти</p>
										</div>
									</a>
								)}
								{isLogin === true && (
									<div className={style.header_menu_down}>
										<a className={style.header_menu_logout} href='#'>
											<div className={style.header_menu_links_svg}>
												<img src={logoutSVG} alt='Выйти' />
											</div>
											<div className={style.header_menu_links_name}>
												<p>Выйти</p>
											</div>
										</a>
									</div>
								)}
							</div>
						)}
					</motion.div>
					<div
						className={style.header_menu_block_close}
						onClick={toggleAll}
					></div>
				</div>
			)}
		</header>
	)
}

export default Header
