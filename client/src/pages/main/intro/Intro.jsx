import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import style from './style.module.css'
import botAvatar from './../../../assets/img/TeamBot.png'
import { ReactComponent as Wave1 } from './../../../assets/svg/wave1.svg'
import { ReactComponent as Wave2 } from './../../../assets/svg/wave2.svg'
import { linkToInvite } from '../../../modules/values'


function Intro() {
    const svgVariants = {
        hidden: {
            y: 500,
        },
        visible: {
            y: 0,
        }
    }

    return (
        <div className={style.intro} id='intro'>
            <div className={style.intro_invite}>
                <div className={style.intro_invite_img}>
                    <motion.img src={botAvatar}
                    initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.5}}
                    />
                </div>
                <div className={style.intro_invite_text}>
                    <h2>Уникальность</h2>
                    <span>- наш главный приоритет</span>
                    <motion.p
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    >У нашего бота есть много уникальных и полезных функций, которые готовы помочь в модерировании и кастомизировании вашего сервера...</motion.p>
                    <div className={style.intro_invite_text_buttons}>
                        <a className={style.intro_to_discord} href={linkToInvite}>Пригласить в Discord</a>
                        <Link className={style.a + " " + style.to_panel} to="/panel">В панель управления</Link>
                    </div>
                </div>
            </div>
            <motion.div
            initial={'hidden'}
            animate={'visible'}
            transition={{duration: 0.3}} 
            variants={svgVariants}
            className={style.intro_wave}>
                <Wave1 className={style.intro_wave1} />
                <Wave2 className={style.intro_wave2} />
            </motion.div>

            <div className='bubbles_block'>
                <div className="bubbles">
                    <span style={{ "--i": 24 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 14 }}></span>
                    <span style={{ "--i": 23 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 16 }}></span>
                    <span style={{ "--i": 19 }}></span>
                    <span style={{ "--i": 20 }}></span>
                    <span style={{ "--i": 22 }}></span>
                    <span style={{ "--i": 25 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 21 }}></span>
                    <span style={{ "--i": 15 }}></span>
                    <span style={{ "--i": 13 }}></span>
                    <span style={{ "--i": 26 }}></span>
                    <span style={{ "--i": 17 }}></span>

                    <span style={{ "--i": 24 }}></span>
                    <span style={{ "--i": 10 }}></span>
                    <span style={{ "--i": 14 }}></span>
                    <span style={{ "--i": 23 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 16 }}></span>
                    <span style={{ "--i": 19 }}></span>
                    <span style={{ "--i": 20 }}></span>
                    <span style={{ "--i": 22 }}></span>
                    <span style={{ "--i": 25 }}></span>
                    <span style={{ "--i": 18 }}></span>
                    <span style={{ "--i": 21 }}></span>
                    <span style={{ "--i": 15 }}></span>
                    <span style={{ "--i": 13 }}></span>
                    <span style={{ "--i": 26 }}></span>
                    <span style={{ "--i": 17 }}></span>
                </div>
            </div>
        </div>
    )
}

export default Intro