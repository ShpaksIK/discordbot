import React from 'react'

import style from './style.module.css'
import teambot from './../../../assets/img/TeamBot.png'
import { ReactComponent as Wave1 } from './../../../assets/img/wave1.svg'
import { ReactComponent as Wave2 } from './../../../assets/img/wave2.svg'


function Intro() {
    return (
        <div className={style.intro}>
            <div className={style.intro_invite}>
                <div className={style.intro_invite_img}>
                    <img src={teambot} />
                </div>
                <div className={style.intro_invite_text}>
                    <h2>Уникальность</h2> <span>- наш главный приоритет</span>
                    <p>У нашего бота есть много уникальных и полезных функций, которые готовы помочь в модерировании и кастомизировании вашего сервера...</p>
                    <div className={style.intro_invite_text_buttons}>
                        <a className={style.intro_to_discord} href='#'>Пригласить в Discord</a>
                        <a className={style.to_panel} href='#'>В панель управления</a>
                    </div>
                </div>
            </div>
            <div className={style.intro_wave}>
                <Wave1 className={style.intro_wave1} />
                <Wave2 className={style.intro_wave2} />
                {/* <svg className={style.intro_wave1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#578f83" fill-opacity="1" d="M0,160L24,170.7C48,181,96,203,144,229.3C192,256,240,288,288,298.7C336,309,384,299,432,277.3C480,256,528,224,576,213.3C624,203,672,213,720,197.3C768,181,816,139,864,101.3C912,64,960,32,1008,48C1056,64,1104,128,1152,138.7C1200,149,1248,107,1296,106.7C1344,107,1392,149,1416,170.7L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                <svg className={style.intro_wave2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#51726b" fill-opacity="1" d="M0,160L24,170.7C48,181,96,203,144,229.3C192,256,240,288,288,298.7C336,309,384,299,432,277.3C480,256,528,224,576,213.3C624,203,672,213,720,197.3C768,181,816,139,864,101.3C912,64,960,32,1008,48C1056,64,1104,128,1152,138.7C1200,149,1248,107,1296,106.7C1344,107,1392,149,1416,170.7L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg> */}
                {/* <img className={style.intro_wave1} src={wave1} />
                <img className={style.intro_wave2} src={wave2} /> */}
            </div>
        </div>
    )
}

export default Intro