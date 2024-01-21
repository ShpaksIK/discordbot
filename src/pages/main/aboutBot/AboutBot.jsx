import React from 'react'

import style from './style.module.css'
import { ReactComponent as WaveEnd1 } from './../../../assets/svg/waveEnd1.svg'
import { ReactComponent as WaveEnd2 } from './../../../assets/svg/waveEnd2.svg'
import test from './../../../assets/img/test.jpg'
import { botName } from '../../../api'


function AboutBot() {
    return (
        <main>
            <div className={style.about}>
                <div className={style.container}>
                    <div className={style.about_block + ' ' + style.about_block_start}>
                        <div className={style.about_block_left}>
                            <div className={style.about_block_left_text}>
                                <b>Модерирование сервера</b>
                                <h2>Хороший контроль над сервером - залог успеха</h2>
                                <p>Поддерживайте порядок на своем сервере. Возможности {botName} позволяют удалять спам сообщения и рекламу. Система банов и мутов сделает модерирование ещё удобнее!</p>
                                <a href='#'>Узнать больше</a>
                            </div>
                        </div>
                        <div className={style.about_block_right}>
                            <img src={test} />
                        </div>
                    </div>

                    <div className={style.about_block + ' ' + style.about_block_wrap}>
                        <div className={style.about_block_left}>
                            <img src={test} />
                        </div>
                        <div className={style.about_block_right}>
                            <div className={style.about_block_right_text}>
                                <b>Приветственные сообщения</b>
                                <h2>Приветствуйте новых участников со своим стилем</h2>
                                <p>Создайте свой стиль приветствия и встречайте новых участников ещё лучше. Вы можете настроить текст, привественное изображение, аватар и многое другое!</p>
                                <a href='#'>Узнать больше</a>
                            </div>
                        </div>
                    </div>

                    <div className={style.about_block}>
                        <div className={style.about_block_left}>
                            <div className={style.about_block_left_text}>
                                <b>Система аудита</b>
                                <h2>Следите за всем, что движестя</h2>
                                <p>Наша система аудита открывает двери к мастерству в управлении серверами. Вы можете настроить дополнительное логирование действий пользователей сервера. Уникальные функции озволяют вам настроить аудит лучше.</p>
                                <a href='#'>Узнать больше</a>
                            </div>
                        </div>
                        <div className={style.about_block_right}>
                            <img src={test} />
                        </div>
                    </div>

                    <div className={style.about_block + ' ' + style.about_block_end + ' ' + style.about_block_wrap}>
                        <div className={style.about_block_left}>
                            <img src={test} />
                        </div>
                        <div className={style.about_block_right}>
                            <div className={style.about_block_right_text}>
                                <b>Панель управления</b>
                                <h2>Самое главное - комфорт</h2>
                                <p>Абсолютно все настройки {botName} мы собрали в панель управления, чтобы вам было удобно управлять ботом: менять префикс, права к командам, управлять участниками и многое другое.</p>
                                <a href='#'>Узнать больше</a>
                            </div>
                        </div>
                    </div>
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