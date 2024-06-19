import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import style from './style.module.css'


function Navbar({ serverId }) {
    return (
        <div>
            <nav>
                <div className={style.nav_links}>
                    <Link className={style.nav_links_link} to={`/dashboard/${serverId}/general`}>
                        <p>Общее</p>
                        <div className={style.nav_links_link_animate}>
                            <div className={style.nav_links_link_animate_div}></div>
                        </div>
                    </Link>
                    <Link className={style.nav_links_link} to={`/dashboard/${serverId}/moderation`}>
                        <p>Модерирование</p>
                        <div className={style.nav_links_link_animate}>
                            <div className={style.nav_links_link_animate_div}></div>
                        </div>
                    </Link>
                    <Link className={style.nav_links_link} to={`/dashboard/${serverId}/audit`}>
                        <p>Аудит</p>
                        <div className={style.nav_links_link_animate}>
                            <div className={style.nav_links_link_animate_div}></div>
                        </div>
                    </Link>
                    <Link className={style.nav_links_link} to={`/dashboard/${serverId}/decor`}>
                        <p>Оформление</p>
                        <div className={style.nav_links_link_animate}>
                            <div className={style.nav_links_link_animate_div}></div>
                        </div>
                    </Link>
                    <Link className={style.nav_links_link} to={`/dashboard/${serverId}/commands`}>
                        <p>Команды</p>
                        <div className={style.nav_links_link_animate}>
                            <div className={style.nav_links_link_animate_div}></div>
                        </div>
                    </Link>
                    <Link className={style.nav_links_link} to={`/dashboard/${serverId}/music`}>
                        <p>Музыка</p>
                        <div className={style.nav_links_link_animate}>
                            <div className={style.nav_links_link_animate_div}></div>
                        </div>
                    </Link>
                    <Link className={style.nav_links_link} to={`/dashboard/${serverId}/rating`}>
                        <p>Рейтинг</p>
                        <div className={style.nav_links_link_animate}>
                            <div className={style.nav_links_link_animate_div}></div>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar