import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import style from './style.module.css'


function ContactFAQ() {
    return (
        <div className={style.contFAQ}>
            <div className={style.container}>
                <h2>Ответы на часто задаваемые вопросы</h2>
                <motion.div className={style.contFAQ_link_div} whileHover={{scale: 1.1}}>
                    <Link to='/documentation/faq' className={style.contFAQ_link}>К вопросам</Link>
                </motion.div>
                
            </div>
        </div>
    )
}

export default ContactFAQ