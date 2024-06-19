import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import style from './style.module.css'


function Navbar() {
    return (
        <div>
            <nav>
                <div className={style.nav_links}>
                    <Link className={style.nav_links_link} to='/documentation/general'>
                        <p>Общее</p>
                        <div className={style.nav_links_link_animate}>
                            <div className={style.nav_links_link_animate_div}></div>
                        </div>
                    </Link>
                    <Link className={style.nav_links_link} to='/documentation/commands'>
                        <p>Команды</p>
                        <div className={style.nav_links_link_animate}>
                            <div className={style.nav_links_link_animate_div}></div>
                        </div>
                    </Link>
                    <Link className={style.nav_links_link} to='/documentation/faq'>
                        <p>FAQ</p>
                        <div className={style.nav_links_link_animate}>
                            <div className={style.nav_links_link_animate_div}></div>
                        </div>
                    </Link>
                    <Link className={style.nav_links_link} to='/documentation/updates'>
                        <p>Изменения</p>
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