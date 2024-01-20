import React from 'react'

import style from './style.module.css'
import test from './../../../assets/img/test.jpg'


function AboutBot() {
    return (
        <div className={style.about}>
            <div className={style.container}>
                <div className={style.about_block}>
                    <div className={style.about_block_left}>
                        <div className={style.about_block_left_text}>
                            <b>Модерирование сервера</b>
                            <h2>Хороший контроль над сервером - залог успеха</h2>
                            <p>Поддерживайте порядок на своем сервере. Возможности TeamBot позволяют удалять спам сообщения и рекламу. Система банов и мутов сделает модерирование ещё удобнее!</p>
                            <a href='#'>Узнать больше</a>
                        </div>
                    </div>
                    <div className={style.about_block_right}>
                        <img src={test} />
                    </div>
                </div>

                <div className={style.about_block}>
                    <div className={style.about_block_left}>
                        <img src={test} />
                    </div>
                    <div className={style.about_block_right}>
                        <div className={style.about_block_right_text}>
                            <b>Приветственные сообщения</b>
                            <h2>Хороший контроль над сервером - залог успеха</h2>
                            <p>Поддерживайте порядок на своем сервере. Возможности TeamBot позволяют удалять спам сообщения и рекламу. Система банов и мутов сделает модерирование ещё удобнее!</p>
                            <a href='#'>Узнать больше</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBot