import axios from 'axios'
import React, { useEffect } from 'react'
import botSVG from './../../assets/img/bot.svg'
import style from './style.module.css'
function Header() {
	useEffect(() => {
		const queryParameters = new URLSearchParams(window.location.search)
		const codeQuery = queryParameters.get('code')

		axios({
			url: 'http://localhost:8080/user/login/callback',
			params: {
				code: codeQuery,
			},
		})
	})

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
					<a href='https://discord.com/api/oauth2/authorize?client_id=1197185720020897922&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=identify+guilds+gdm.join+email+guilds.join+connections'>
						Вход
					</a>
				</div>
				<button className='rt'>awd</button>
			</div>
		</div>
	)
}

export default Header
