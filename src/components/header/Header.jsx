import axios from 'axios'
import React, { useEffect } from 'react'
import botSVG from './../../assets/img/bot.svg'
import style from './style.module.css'
function Header() {
	useEffect(() => {
		press()
	}, [])

	async function press() {
		await axios.get('http://localhost:8080/', {
			urlQuery: window.location.href,
		})
	}
	// async function getMe() {
	// 	const res = await axios('http://localhost:8080/')
	// }
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
					<a href='https://discord.com/api/oauth2/authorize?client_id=1197185720020897922&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&scope=identify'>
						Войти
					</a>
				</div>
				<button className='rt'>awd</button>
			</div>
		</div>
	)
}

export default Header
