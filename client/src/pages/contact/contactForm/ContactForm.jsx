import React from 'react'

import style from './style.module.css'


function ContactForm() {
    return (
        <div className={style.contForm}>
            <div className={style.container}>
                <h2>Связаться с нами</h2>
                <p>Вы можете написать нам о багах, идеях или пожеланиях, заполнив данную форму</p>
                <div className={style.form}>
                    <input type="text" placeholder='Имя' />
                    <input type="email" placeholder='Почта' />
                    <textarea type="text" placeholder='Сообщение' />
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm