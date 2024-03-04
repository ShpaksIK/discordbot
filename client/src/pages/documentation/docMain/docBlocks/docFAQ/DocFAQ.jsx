import React, { useState } from 'react'
import { motion } from 'framer-motion'

import style from './style.module.css'
import arrowSVG from './../../../../../assets/svg/arrow.svg'


function DocFAQ() {
    const [expandedIndex, setExpandedIndex] = useState(null)
    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }
    const faqContent = [
        {
            "title": "Как добавить бота на сервер?",
            "answer": "А вот так!щопйщцушпущ"
        },
        {
            "title": "Как учавствовать в рейтинге серверов?",
            "answer": "Lorem"
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
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className={style.container}>
                <h3>FAQ (часто задаваемые вопросы)</h3>
                <div className={style.faq}>
                    {faqContent.map((el, index) => (
                        <div className={style.faq_block} key={index} onClick={() => toggleExpand(index)}>
                            <div className={style.faq_block_question}>
                                <h4>{el.title}</h4>
                                {expandedIndex !== index && (
                                    <motion.div className={style.faq_block_open}
                                    initial={{rotate: 90 + "deg"}}
                                    animate={{rotate: -90 + "deg"}}>
                                        <img src={arrowSVG} alt='Открыть' />
                                    </motion.div>
                                )}
                                {expandedIndex === index && (
                                    <motion.div className={style.faq_block_open}
                                    initial={{rotate: -90 + "deg"}}
                                    animate={{rotate: 90 + "deg"}}
                                    transition={{duration: 0.3}}>
                                        <img src={arrowSVG} alt='Закрыть' />
                                    </motion.div>
                                )}
                            </div>
                            <div className={style.faq_answer}>
                                {expandedIndex === index && (
                                    <motion.div className={style.faq_answer_block}
                                    initial={{marginTop: -60 + "px", opacity: 0}}
                                    animate={{marginTop: 0, opacity: 1}}
                                    transition={{duration: 0.3}}>
                                        <b>Ответ</b>
                                        <p>{el.answer}</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default DocFAQ