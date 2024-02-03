import React, { useState } from 'react'
import { motion } from 'framer-motion'

import DocMain from '../docMain/DocMain'
import style from './style.module.css'


function Navbar() {
    const [activeTab, setActiveTab] = useState('about')
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <div>
            <nav>
                <div className={style.nav_links}>
                    <div className={style.nav_links_link}>
                        <a href='#' onClick={() => handleTabClick('about')}>Общее</a>
                    </div>
                    <div className={style.nav_links_link}>
                        <a href='#' onClick={() => handleTabClick('commands')}>Команды</a>
                    </div>
                    <div className={style.nav_links_link}>
                        <a href='#' onClick={() => handleTabClick('FAQ')}>FAQ</a>
                    </div>
                    <div className={style.nav_links_link}>
                        <a href='#' onClick={() => handleTabClick('updates')}>Изменения</a>
                    </div>
                </div>
            </nav>
            <DocMain activeTab={activeTab} />
        </div>
    )
}

export default Navbar