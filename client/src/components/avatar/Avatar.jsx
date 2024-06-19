import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import style from './style.module.css'
import panelSVG from './../../assets/svg/panel.svg'
import profileSVG from './../../assets/svg/profile.svg'
import logoutSVG from './../../assets/svg/logout.svg'
import { userData } from '../../modules/values'


function Avatar({ func }) {
    const [showAvatarBlock, setShowAvatarBlock] = useState(false)
    const changeShowAvatarBlock = () => setShowAvatarBlock((showAvatarBlock) => !showAvatarBlock)
    const removeUser = () => {
        userData.removeData('', '', '', false)
        changeShowAvatarBlock()
        func()
    }

    return (
        <div>
            <div className={style.avatar} onClick={changeShowAvatarBlock}>
                <img src={userData.imgUrl} alt={userData.nickName} />
            </div>
            {showAvatarBlock && (
                <motion.div className={style.block}
                initial={{opacity: 0, top: 50 + "px", scale: 0.1}}
                animate={{opacity: 1, top: null, scale: 1}}
                >
                    <div className={style.block_header}>
                        <div className={style.block_header_avatar}>
                            <img src={userData.imgUrl} alt={userData.nickName} />
                        </div>
                        <div className={style.block_header_text}>
                            <h3>{userData.nickName}</h3>
                            <p>{userData.nickTag}</p>
                        </div>
                    </div>
                    <div className={style.line}></div>
                    <div className={style.block_menu}>
                        <div className={style.block_menu_link}>
                            <div className={style.block_menu_link_svg}>
                                <img src={panelSVG} alt='Панель управления' />
                            </div>
                            <div className={style.block_menu_link_title}>
                                <Link className={style.block_menu_link_title_link} to='/servers'><h4>Панель управления</h4></Link>
                            </div>
                        </div>

                        <div className={style.block_menu_link}>
                            <div className={style.block_menu_link_svg}>
                                <img src={profileSVG} alt='Профиль' />
                            </div>
                            <div className={style.block_menu_link_title}>
                                <Link className={style.block_menu_link_title_link} to='/profile'><h4>Профиль</h4></Link>
                            </div>
                        </div>

                        <div className={style.block_menu_link}>
                            <div className={style.block_menu_link_svg}>
                                <img src={logoutSVG} alt='Выйти' />
                            </div>
                            <div className={style.block_menu_link_title} onClick={removeUser}>
                                <h4>Выйти</h4>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default Avatar