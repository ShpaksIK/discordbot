import axios from 'axios'
import React from 'react'
import botSVG from './../../assets/img/bot.svg'
import style from './style.module.css'
function Header() {
	async function getMe() {
		const res = axios.get('http://localhost:8080/')
		console.log(res)
	}
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
					<a href='' onClick={getMe}>
						Войти
					</a>
				</div>
				<button className='rt'>awd</button>
			</div>
		</div>
	)
}

export default Header
