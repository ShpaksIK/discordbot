import React from 'react'

import style from './style.module.css'


function ContactForm() {
    return (
        <div className={style.contForm}>
            <div className={style.container}>
                <h2>Связаться с нами</h2>
                <p>Вы можете написать нам о багах, идеях или пожеланиях, заполнив данную форму</p>
                    <form>
                    <div className={style.form}>
                        <label for="type">Выберите тип обращения:</label>
                        <select id="type">
                            <option value="review">Оставить отзыв</option>
                            <option value="idea">Предложить идею</option>
                            <option value="bug">Нашёл неисправность</option>
                            <option value="question">Задать вопрос</option>
                        </select>
                        <input type="text" placeholder='Имя' required />
                        <input type="email" placeholder='Почта' required />
                        <textarea type="text" minLength={10} maxLength={1000} placeholder='Сообщение' required />
                        <button>Отправить</button>
                    </div>
                    </form>
            </div>
        </div>
    )
}

export default ContactForm