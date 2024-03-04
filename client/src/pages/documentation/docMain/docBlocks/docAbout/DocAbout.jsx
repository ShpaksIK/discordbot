import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import style from './style.module.css'
import { botName, linkToInvite } from '../../../../../api'
import botAvatar from './../../../../../assets/img/TeamBot.png'
import Warning from '../../../../../components/warning/Warning'


function DocAbout() {
    return (
        <div
        className={style.docAbout}>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className={style.container}>
                <div className={style.def}>
                    <div className={style.def_text} id='intro'>
                        <h3>О боте</h3>
                        <p><b>{botName}</b> — это Discord-бот, который предназначен для улучшения работы и взаимодействия участников на сервере. Он предоставляет широкий набор функций включающих в себя много полезных и интересных команд. Одна из особенностей бота — настройка прямо на сайте. Не мучайтесь с командами! </p>
                    </div>
                    <div className={style.def_logo}>
                        <img src={botAvatar} alt={botName} />
                    </div>
                </div>
                <div className={style.about_main}>
                    <div className={style.options} id='func'>
                        <h3>Функции бота</h3>
                        <div className={style.option}>
                            <b>Основные функции</b>
                            <p>Основные функции включают в себя настройку префикса, команды для получения информации о сервере, участниках, ролях. Бот может предоставлять полезные инструменты, такие как напоминания и голосования, чтобы упростить организацию работы на сервере и т.п.</p>
                        </div>
                        <div className={style.option}>
                            <b>Модерирование</b>
                            <p>Модерирование позволяет администраторам сервера контролировать его безопасность и порядок. Бот предоставляет такие функции, как блокировка, кик, предупреждения участников, а также фильтрацию и удаление нежелательного контента.</p>
                        </div>
                        <div className={style.option}>
                            <b>Система аудита</b>
                            <p>Аудит сервера предоставляет подробную информацию о событиях, происходящих на сервере. Бот может автоматически регистрировать изменения в составе участников, создании и удалении каналов, а также другие действия, которые могут быть полезны для администраторов и модераторов.</p>
                        </div>
                        <div className={style.option}>
                            <b>Музыка</b>
                            <p>Вы можете воспроизводить песни из различных источников, управлять очередью воспроизведения, изменять громкость и предоставлять другие функции, связанные с музыкой.</p>
                        </div>
                        <div className={style.option}>
                            <b>Стилизация сервера</b>
                            <p>Создайте уникальный стиль для вашего сервера прямо в панели управления ботом! Вы можете переименовывать каналы, менять логотип, названия, настраивать сообщения приветствий и многое другое.</p>
                        </div>
                        <div className={style.option}>
                            <b>Рейтинг</b>
                            <p>Участвуйте в рейтинге серверов и занимайте топы. Лучшие сервера будут опубликованы на сайте!</p>
                        </div>
                        <div className={style.option}>
                            <b>Пользовательские команды</b>
                            <p>Создавайте свои команды со своими сообщениями и стилем, которые могут вызвать другую команду, выдать роль и т.п.</p>
                        </div>
                    </div>
                    <div className={style.about_main_nav}>
                        <nav>
                            <p>Содержание раздела</p>
                            <a href='#intro'>Введение</a>
                            <a href='#func'>Функции</a>
                            <a href='#invite'>Добавление на сервер</a>
                            <a href='#configure'>Настройка бота</a>
                        </nav>
                    </div>
                </div>
                <div className={style.invite} id='invite'>
                    <h3>Добавление на сервер</h3>
                    <div className={style.invite_text}>
                        <b>Этапы добавления:</b>
                        <ol>
                            <li>Перейти на главную страницу сайта: <Link className={style.invite_text_link} to="/">главная</Link>.</li>
                            <li>Нажать на кнопку "Пригласить в Discord".</li>
                            <li>Следовать дальнейшим указаниям бота.</li>
                        </ol>
                        <b>Другой способ:</b>
                        <ol>
                            <li>Нажать на кнопку: <a href={linkToInvite} className={style.invite_text_link}>пригласить</a>.</li>
                            <li>Следовать дальнейшим указаниям бота.</li>
                        </ol>
                    </div>
                    <Warning />
                </div>
                <div className={style.configure} id='configure'>
                    <h3>Настройка бота</h3>
                    <div className={style.configure_text}>
                        <b>Этапы для перехода в панель управления:</b>
                        <ol>
                            <li>Перейти на главную страницу сайта: <Link className={style.invite_text_link} to="/">главная</Link>.</li>
                            <li>Нажмите на кнопку "Войти".</li>
                            <li>Следовать дальнейшим указаниям бота.</li>
                            <li>После входа на главной странице нажмите на свой аватар.</li>
                            <li>В открывшемся меню нажмите кнопку "Панель управления".</li>
                            <li>Если у вас есть сервера, открываете нужный и настраиваете.</li>
                        </ol>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default DocAbout