import React from 'react'

import style from './style.module.css'
import botAvatar from './../../assets/img/TeamBot.png'
import { ReactComponent as DiscordSVG } from './../../assets/svg/discord.svg'
import { botName } from '../../api'


function Footer() {
    return (
        <footer>
            <div className={style.container}>
                <div className={style.footer_logo}>
                    <div className={style.footer_logo_logo}>
                        <img src={botAvatar} />
                        <h2>{botName}</h2>
                    </div>
                    <div className={style.footer_logo_socials}>
                        <p>Мы в соц. сетях</p>
                        <div className={style.footer_logo_social_s}>
                            <a href='#'><DiscordSVG className={style.footer_logo_social} /></a>
                        </div>
                    </div>
                </div>
                <div className={style.footer_links}>
                    <div className={style.footer_links_column}>
                        <a href='#'>Документация</a>
                        <a href='#'>Команды</a>
                    </div>
                    <div className={style.footer_links_column}>
                        <a href='#'>Обратная связь</a>
                        <a href='#'>Поддержите нас</a>
                    </div>
                    <div className={style.footer_links_column}>
                        <a href='#'>Условия использования</a>
                        <a href='#'>Конфиденциальность</a>
                        <a href='#'>Файлы Cookie</a>
                    </div>
                </div>
            </div>
            <div className={style.footer_copyright}>
                <p>© 2024 — {botName} | Все права защищены</p>
            </div>
        </footer>
    )
}

export default Footer