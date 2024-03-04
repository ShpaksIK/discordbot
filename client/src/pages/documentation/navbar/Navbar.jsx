import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.module.css'


function Navbar() {
    return (
        <div>
            <nav>
                <div className={style.nav_links}>
                    <div className={style.nav_links_link}>
                        <Link to='/documentation/general'>Общее</Link>
                    </div>
                    <div className={style.nav_links_link}>
                        <Link to='/documentation/commands'>Команды</Link>
                    </div>
                    <div className={style.nav_links_link}>
                        <Link to='/documentation/faq'>FAQ</Link>
                    </div>
                    <div className={style.nav_links_link}>
                        <Link to='/documentation/updates'>Изменения</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar