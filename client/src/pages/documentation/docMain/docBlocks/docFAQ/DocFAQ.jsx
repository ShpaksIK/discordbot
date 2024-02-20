import React from 'react'
import { motion } from 'framer-motion'

import style from './style.module.css'
import arrowSVG from './../../../../../assets/svg/arrow.svg'


function DocFAQ() {
    const faqContent = [
        {
            "title": "Как добавить бота на сервер?",
            "answer": ""
        },
        {
            "title": "Как учавствовать в рейтинге серверов?",
            "answer": ""
        },
        {
            "title": "Как получить доступ к панели управления?",
            "answer": ""
        },
        {
            "title": "Где можно настроить права для использования команд?",
            "answer": ""
        },
    ]

    return (
        <div className={style.docFAQ}>
            <motion.div 
            initial={{opacity: 0, marginTop: -20 + "px"}}
            animate={{opacity: 1, marginTop: 0}}
            className={style.container}>
                <h3>FAQ (часто задаваемые вопросы)</h3>
                <div className={style.faq}>
                    {faqContent.map((el) => (
                        <div className={style.faq_block}>
                            <h4>{el.title}</h4>
                            <motion.div
                            className={style.faq_block_open}>
                                <img src={arrowSVG} alt='Открыть / Закрыть' />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default DocFAQ