import React, { useState } from 'react'

import style from './style.module.css'


function Warning() {
    return (
        <div className={style.invite_warning}>
            <div className={style.invite_warning_title}>Внимание!</div>
            <div className={style.invite_warning_text}>
                <p>Чтобы бот корректно функционировал не снимайте галочки при выборе прав.</p>
                <p>Изначально выбраны все необходимые права для его работы (в том числе и право администратора).</p>
            </div>
        </div>
    )
}

export default Warning