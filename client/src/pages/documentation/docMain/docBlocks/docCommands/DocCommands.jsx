import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import style from './style.module.css'
import { botName } from '../../../../../api'


function DocCommands() {
    return (
        <div className={style.docCommands}>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className={style.container}>
                <div className={style.command}>
                    <h3>Команды</h3>
                    <p><b>{botName}</b> предоставляет вашему серверу огромное количество команд. Вы можете их отключать, добавлять и менять в своем профиле.</p>
                    <p>Полный списко команд опубликован на данной странице: <Link className={style.link_to_commands} to='/commands'>комадны</Link></p>
                </div>
                <div className={style.command}>
                    <h3>Слэш-команды</h3>
                    <p>Пользовательские слэш-команды отключены по умолчанию, Вы можете включить их в панели управления в разделе Общее.</p>
                </div>
                <div className={style.command}>
                    <h3>Ваши команды</h3>
                    <p>Вы можете создавать свои команды благодаря {botName}! Эта функция доступна в панели управлени сервера в разделе Команды.</p>
                </div>
                <div className={style.prefix}>
                    <h3 className={style.prefix_bot_title}>Префикс бота <span>?</span></h3>
                    <p>Префикс бота нужен для того, чтобы бот мог понимать когда вы к нему обращаетесь. Он ставится в начале команды.</p>
                    <p>По умолчанию {botName} использует префикс "<span>?</span>", но вы можете его настроить всего за пару кликов:</p>
                    <ol>
                        <li>Войти в свой аккаунт и зайти в списко своих серверов.</li>
                        <li>Выбрать нужный сервер.</li>
                        <li>Нажать на вкладку "Общее".</li>
                        <li>Сменить текущий префикс на новый.</li>
                    </ol>
                </div>
            </motion.div>
        </div>
    )
}

export default DocCommands