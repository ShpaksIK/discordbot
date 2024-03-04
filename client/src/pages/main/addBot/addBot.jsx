import React from 'react'
import { motion } from 'framer-motion'

import style from './style.module.css'
import { botName } from '../../../api'
import { serversUsingBot, linkToInvite } from '../../../api'

function AddBot() {
    return (
        <div className={style.addBot}>
            <h2>{botName} сделает ваш сервер лучше</h2>
            <p>{serversUsingBot}+ сообществ используют {botName} для создания профессиональных серверов</p>
            <motion.a 
            href={linkToInvite}
            initial={{scale: 1}}
            animate={{scale: 1.2}}
            transition={{repeat: Infinity, duration: 1}}
            >Сделать шаг вперед</motion.a>
        </div>
    )
}

export default AddBot