import React from 'react'

import style from './style.module.css'
import { botName } from '../../../api'
import { serversUsingBot, linkToInvite } from '../../../api'

function AddBot() {
    return (
        <div className={style.addBot}>
            <h2>{botName} сделает ваш сервер лучше</h2>
            <p>{serversUsingBot}+ сообществ используют {botName} для создания профессиональных серверов</p>
            <a href={linkToInvite}>Сделать шаг вперед</a>
        </div>
    )
}

export default AddBot