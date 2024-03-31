import React from 'react'
import { motion } from 'framer-motion'

import style from './style.module.css'
import { ReactComponent as WaveEnd1 } from './../../../assets/svg/waveEnd1.svg'
import { ReactComponent as WaveEnd2 } from './../../../assets/svg/waveEnd2.svg'
import test from './../../../assets/img/test.jpg'
import { botName } from '../../../modules/values'


const titleAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: titleCustom => ({
        x: 0,
        opacity: 1,
        transition: {delay: titleCustom * 0.2},
    }),
}

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: textCustom => ({
        x: 0,
        opacity: 1,
        transition: {delay: textCustom * 0.2},
    }),
}

function AboutBot() {
    return (
        <main>
            <div className={style.about}>
                <div className={style.container}>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2, once: true}}
                    className={style.about_block + ' ' + style.about_block_start}>
                        <div className={style.about_block_left}>
                            <div className={style.about_block_left_text}>
                                <b>Модерирование сервера</b>
                                <motion.h2
                                titleCustom={1}
                                variants={titleAnimation}>
                                    Хороший контроль над сервером - залог успеха</motion.h2>
                                <motion.p
                                textCustom={1}
                                variants={textAnimation}
                                >Поддерживайте порядок на своем сервере. Возможности {botName} позволяют удалять спам сообщения и рекламу. Система банов и мутов сделает модерирование ещё удобнее!</motion.p>
                                <motion.a 
                                href='#'
                                whileHover={{scale: 1.1}}
                                >Узнать больше</motion.a>
                            </div>
                        </div>
                        <div className={style.about_block_right}>
                            <img src={test} />
                        </div>
                    </motion.div>

                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2, once: true}}
                    className={style.about_block + ' ' + style.about_block_wrap}>
                        <div className={style.about_block_left}>
                            <img src={test} />
                        </div>
                        <div className={style.about_block_right}>
                            <div className={style.about_block_right_text}>
                                <b>Приветственные сообщения</b>
                                <motion.h2
                                titleCustom={2}
                                variants={titleAnimation}>
                                    Приветствуйте новых участников со своим стилем</motion.h2>
                                <motion.p
                                textCustom={2}
                                variants={textAnimation}
                                >Создайте свой стиль приветствия и встречайте новых участников ещё лучше. Вы можете настроить текст, привественное изображение, аватар и многое другое!</motion.p>
                                <motion.a 
                                    href='#'
                                    whileHover={{scale: 1.1}}
                                >Узнать больше</motion.a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2, once: true}}
                    className={style.about_block}>
                        <div className={style.about_block_left}>
                            <div className={style.about_block_left_text}>
                                <b>Система аудита</b>
                                <motion.h2
                                titleCustom={3}
                                variants={titleAnimation}>Следите за всем, что движестя</motion.h2>
                                <motion.p
                                textCustom={3}
                                variants={textAnimation}
                                >Наша система аудита открывает двери к мастерству в управлении серверами. Вы можете настроить дополнительное логирование действий пользователей сервера. Уникальные функции озволяют вам настроить аудит лучше.</motion.p>
                                <motion.a 
                                    href='#'
                                    whileHover={{scale: 1.1}}
                                >Узнать больше</motion.a>
                            </div>
                        </div>
                        <div className={style.about_block_right}>
                            <img src={test} />
                        </div>
                    </motion.div>

                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount: 0.2, once: true}}
                    className={style.about_block + ' ' + style.about_block_end + ' ' + style.about_block_wrap}>
                        <div className={style.about_block_left}>
                            <img src={test} />
                        </div>
                        <div className={style.about_block_right}>
                            <div className={style.about_block_right_text}>
                                <b>Панель управления</b>
                                <motion.h2
                                titleCustom={4}
                                variants={titleAnimation}>Самое главное - комфорт</motion.h2>
                                <motion.p
                                textCustom={4}
                                variants={textAnimation}
                                >Абсолютно все настройки {botName} мы собрали в панель управления, чтобы вам было удобно управлять ботом: менять префикс, права к командам, управлять участниками и многое другое.</motion.p>
                                <motion.a
                                    href='#'
                                    whileHover={{scale: 1.1}}
                                >Узнать больше</motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className={style.about_wave}>
                <WaveEnd1 className={style.about_wave1} />
                <WaveEnd2 className={style.about_wave2} />
            </div>
        </main>
    )
}

export default AboutBot