import React from 'react'

import style from './style.module.css'
import botAvatar from './../../../assets/img/TeamBot.png'
import { ReactComponent as Wave1 } from './../../../assets/svg/wave1.svg'
import { ReactComponent as Wave2 } from './../../../assets/svg/wave2.svg'
import { linkToInvite } from '../../../api'


function Intro() {
    return (
        <div className={style.intro}>
            <div className={style.intro_invite}>
                <div className={style.intro_invite_img}>
                    <img src={botAvatar} />
                </div>
                <div className={style.intro_invite_text}>
                    <h2>Уникальность</h2> <span>- наш главный приоритет</span>
                    <p>У нашего бота есть много уникальных и полезных функций, которые готовы помочь в модерировании и кастомизировании вашего сервера...</p>
                    <div className={style.intro_invite_text_buttons}>
                        <a className={style.intro_to_discord} href={linkToInvite}>Пригласить в Discord</a>
                        <a className={style.to_panel} href='#'>В панель управления</a>
                    </div>
                </div>
            </div>
            <div className={style.intro_wave}>
                <Wave1 className={style.intro_wave1} />
                <Wave2 className={style.intro_wave2} />
            </div>
        </div>
    )
}

export default Intro