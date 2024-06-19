import React from 'react'
import { motion } from 'framer-motion'

import style from './style.module.css'


function ButtonSaveSettings({ changedSettings }) {
    // Будет реализован запрос к файлу, который посылает запрос в
    // базу данных для сохранения настроек
    function saveChangedSettings(changedSettings) {console.log(changedSettings)}

    return (
        <div 
        className={style.saveSettings}
        onClick={() => {saveChangedSettings(changedSettings)}}>
           Применить изменения
        </div>
    )
}

export default ButtonSaveSettings