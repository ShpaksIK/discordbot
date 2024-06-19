import React from 'react'

import SettingsBlock from '../../../../../components/settingsBlock/SettingsBlock'
import ButtonSaveSettings from '../../../../../components/buttonSaveSettings/ButtonSaveSettings'

import style from './style.module.css'


function DashGeneral({ serverData }) {
    // Объект, содержащий все измененные настройки
    let listChangedSettings = {}
    // Функция, которая считывает поля ввода на измененность
    function readFields(key, value) {
        listChangedSettings[key] = value
    }

    return (
        <div className={style.main}>
            <div className={style.container}>
                <div>
                <SettingsBlock title={"Основное"}>
                    <div className={style.sBlock_main}>
                        <div className={style.sBlock_main_input}>
                            <p className={style.text_input}>Префикс</p>
                            <input defaultValue={serverData["settings"]["prefix"]} maxLength={20} onChange={(event) => {readFields("prefix", event.target.value)}} />
                        </div>
                        <div className={style.sBlock_main_input}>
                            <p className={style.text_input}>Основой цвет</p>
                            <input type='color' defaultValue={serverData["settings"]["mainColor"]} onChange={(event) => {readFields("mainColor", event.target.value)}} />
                        </div>
                        <div className={style.sBlock_main_input}>
                            <p className={style.text_input}>Роли администрации</p>
                            <input />
                            <p className={style.text_afterInput}>Пользователи с указанными ролями получат доступ к панели управления сервером.</p>
                        </div>
                    </div>
                </SettingsBlock>
                </div>

                <div>
                <SettingsBlock title={"Сообщения"}>
                    <div className={style.sBlock_main}>
                        <div className={style.sBlock_main_checkbox}>
                            <input type="checkbox" id="checkbox1" defaultChecked={serverData["settings"]["messagesMentionUser"]} onChange={() => {readFields("messagesMentionUser", document.getElementById("checkbox1").checked)}} />
                            <p>Упоминать пользователя</p>
                        </div>
                    </div>
                </SettingsBlock>
                </div>

                <div>
                <SettingsBlock title={"Присоединение"}>
                    <div className={style.sBlock_main}>
                        <div className={style.sBlock_main_checkbox}>
                            <input type="checkbox" id="checkbox2" defaultChecked={serverData["settings"]["greetUser"]} onChange={() => {readFields("greetUser", document.getElementById("checkbox2").checked)}} />
                            <p>Приветствовать нового пользователя</p>
                        </div>
                        <div className={style.sBlock_main_input}>
                            <p className={style.text_input}>Назначенные роли</p>
                            <input placeholder="Нет ролей" />
                            <p className={style.text_afterInput}>При присоединении, пользователю будут назначены эти роли</p>
                        </div>
                        <div className={style.sBlock_main_input}>
                            <p className={style.text_input}>Сообщение при подключении пользователя к серверу</p>
                            <textarea placeholder='По умолчанию' defaultValue={serverData["settings"]["greetWelcomeText"]} maxLength={1000} onChange={(event) => {readFields("greetWelcomeText", event.target.value)}} />
                            <div className={style.text_afterTextarea}>
                                <b>Переменные:</b>
                                <p><span>[user]</span> упоминание пользователя</p>
                                <p><span>[userName]</span> имя пользователя</p>
                                <p><span>[server]</span> название сервера</p>
                                <p><span>[memberCount]</span> количество пользователей</p>
                            </div>
                        </div>
                        <div className={style.sBlock_main_radio}>
                            <div className={style.sBlock_main_radio_r}>
                                <input type="checkbox" id="checkbox3" defaultChecked={serverData["settings"]["greetSendToLs"]} onChange={() => {readFields("greetSendToLs", document.getElementById("checkbox3").checked)}} />
                                <p>Отправить в личные сообщения</p>
                            </div>
                            <div className={style.sBlock_main_radio_r}>
                                <input type="checkbox" id="checkbox4" defaultChecked={serverData["settings"]["greetSendToChannel"]} onChange={() => {readFields("greetSendToChannel", document.getElementById("checkbox4").checked)}} />
                                <p>Отправить на канал</p>
                            </div>
                        </div>
                    </div>
                </SettingsBlock>
                </div>

            </div>
            <ButtonSaveSettings changedSettings={listChangedSettings} />
        </div>
    )
}

export default DashGeneral