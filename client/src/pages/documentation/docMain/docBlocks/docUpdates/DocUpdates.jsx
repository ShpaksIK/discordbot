import React from 'react'
import { motion } from 'framer-motion'

import style from './style.module.css'


function DocUpdates() {
    const updates = [
        {
            "version": "1.0",
            "list": [
                "Сделали сайт",
                "Сделали бота",
                "Связали сайта с ботом",
                "Настроили базы данных",
                "Оптимизировали",
            ],
            "date": "1.09.2024"
        },
        {
            "version": "1.0",
            "list": [
                "Сделали сайт",
                "Сделали бота",
                "Связали сайта с ботом",
                "Настроили базы данных",
                "Оптимизировали",
            ],
            "date": "1.09.2024"
        },
        {
            "version": "1.0",
            "list": [
                "Сделали сайт",
                "Сделали бота",
                "Связали сайта с ботом",
                "Настроили базы данных",
                "Оптимизировали",
            ],
            "date": "1.09.2024"
        },
    ]

    return (
        <div className={style.docUpdates}>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className={style.container}>
                <h3>Все обновления бота</h3>
                <div className={style.update}>
                    {updates.map((el, index) => (
                        <div key={index}>
                            <div className={style.update_line}></div>
                            <div className={style.update_block}>
                                <h4>Версия {el.version}</h4>
                                <b>Список изменений:</b>
                                <ul>
                                    {el.list.map((l) => (
                                        <li>
                                            {l}
                                        </li>
                                    ))}
                                </ul>
                                <p>{el.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default DocUpdates