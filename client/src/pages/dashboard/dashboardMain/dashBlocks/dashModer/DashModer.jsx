import React from 'react'

import SettingsBlock from '../../../../../components/settingsBlock/SettingsBlock'
import ButtonSaveSettings from '../../../../../components/buttonSaveSettings/ButtonSaveSettings'

import style from './style.module.css'


function DashModer({ serverData }) {
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
                            <p className={style.text_input}>Назначенные роли</p>
                            <input placeholder="Нет ролей (администраторы)" />
                            <p className={style.text_afterInput}>Пользователи с данными ролями имеют доступ к командам модераторов.</p>
                        </div>
                        <div className={style.sBlock_main_checkbox}>
                            <input type="checkbox" id="checkbox1" defaultChecked={serverData["settings"]["messagesMentionUser"]} onChange={() => {readFields("messagesMentionUser", document.getElementById("checkbox1").checked)}} />
                            <p>Разрешить модераторам с более высокой ролью наказывать модераторов ниже</p>
                        </div>
                        <div className={style.sBlock_main_checkbox}>
                            <input type="checkbox" id="checkbox1" defaultChecked={serverData["settings"]["messagesMentionUser"]} onChange={() => {readFields("messagesMentionUser", document.getElementById("checkbox1").checked)}} />
                            <p>Установить кулдаун</p>
                        </div>
                    </div>
                </SettingsBlock>
                </div>

                <div>
                <SettingsBlock title={"Блокировка чата (мут)"}>
                    <div className={style.sBlock_main}>
                        <div className={style.sBlock_main_input}>
                            <p className={style.text_input}>Роль мута</p>
                            <input placeholder="Нет ролей (администраторы)" />
                            <p className={style.text_afterInput}>Данная роль будет выдана пользователям, которые получили блокировку чата.</p>
                        </div>
                        <div className={style.sBlock_main_radio}>
                            <div className={style.sBlock_main_radio_r}>
                                <input type="radio" name="whereMuteChat" id="radio1" defaultChecked={serverData["settings"]["greetSendToLs"]} onChange={() => {readFields("greetSendToLs", document.getElementById("radio1").checked)}} />
                                <p>Заблокировать чат на всём сервере</p>
                            </div>
                            <div className={style.sBlock_main_radio_r}>
                                <input type="radio" name="whereMuteChat" id="radio2" defaultChecked={serverData["settings"]["greetSendToChannel"]} onChange={() => {readFields("greetSendToChannel", document.getElementById("radio2").checked)}} />
                                <p>Заблокировать чат в текущем канале</p>
                            </div>
                        </div>
                    </div>
                </SettingsBlock>
                </div>

                <div>
                <SettingsBlock title={"Предупреждения"}>
                    <div className={style.sBlock_main}>
                        <div className={style.sBlock_main_input}>
                            <p className={style.text_input}>Макс. предупреждений</p>
                            <input type="number" defaultValue={serverData["settings"]["prefix"]} max={10} min={1} onChange={(event) => {readFields("prefix", event.target.value)}} />
                            <p className={style.text_afterInput}>За превышение максимума предупреждений пользователь будет наказан.</p>
                        </div>
                        <div className={style.sBlock_main_radio}>
                            <p className={style.text_input}>Наказание</p>
                            <div className={style.sBlock_main_radio_r}>
                                <input type="radio" name="punishmentForWarnings" id="radio3" defaultChecked={serverData["settings"]["greetSendToLs"]} onChange={() => {readFields("greetSendToLs", document.getElementById("radio3").checked)}} />
                                <p>Выгнать пользователя</p>
                            </div>
                            <div className={style.sBlock_main_radio_r}>
                                <input type="radio" name="punishmentForWarnings" id="radio4" defaultChecked={serverData["settings"]["greetSendToChannel"]} onChange={() => {readFields("greetSendToChannel", document.getElementById("radio4").checked)}} />
                                <p>Заблокировать пользователя</p>
                            </div>
                            <div className={style.sBlock_main_radio_r}>
                                <input type="radio" name="punishmentForWarnings" id="radio5" defaultChecked={serverData["settings"]["greetSendToChannel"]} onChange={() => {readFields("greetSendToChannel", document.getElementById("radio5").checked)}} />
                                <p>Заблокировать чат пользователю</p>
                            </div>
                            <div className={style.sBlock_main_radio_r}>
                                <input type="radio" name="punishmentForWarnings" id="radio6" defaultChecked={serverData["settings"]["greetSendToChannel"]} onChange={() => {readFields("greetSendToChannel", document.getElementById("radio6").checked)}} />
                                <p>Ничего</p>
                            </div>
                        </div>
                    </div>
                </SettingsBlock>
                </div>

                <div>
                <SettingsBlock title={"Фильтрация сообщений"}>
                    <div className={style.sBlock_main}>
                        <div className={style.sBlock_main_checkbox}>
                            <input type="checkbox" id="checkbox1" defaultChecked={serverData["settings"]["messagesMentionUser"]} onChange={() => {readFields("messagesMentionUser", document.getElementById("checkbox1").checked)}} />
                            <p>Режим фильтрации</p>
                        </div>
                        
                    </div>
                </SettingsBlock>
                </div>

            </div>
            <ButtonSaveSettings changedSettings={listChangedSettings} />
        </div>
    )
}

export default DashModer