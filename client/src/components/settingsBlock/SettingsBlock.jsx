import React, { useState } from 'react'
import { motion } from 'framer-motion'

import style from './style.module.css'
import Arrow from '../../components/arrow/Arrow'


function SettingsBlock({ title, children }) {
    const [isChanneIsOpen, setIsChanneIsOpen] = useState(true)
    const toggleChanneIsOpen = () => setIsChanneIsOpen((isChanneIsOpen) => !isChanneIsOpen)

    return (
        <motion.div 
        className={style.sBlock}>
            <div className={style.sBlock_title} onClick={toggleChanneIsOpen}>
                <p>{title}</p>
                <Arrow />
            </div>
            {isChanneIsOpen && (
                children
            )}
        </motion.div>
    )
}

export default SettingsBlock