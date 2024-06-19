import React from 'react'
import { motion } from 'framer-motion'
import arrowSVG from './../../assets/svg/arrow.svg'

import style from './style.module.css'


function Arrow() {
    return (
        <div className={style.arrow}>
            <motion.div className={style.faq_block_open}
                initial={{rotate: 90 + "deg"}}
                animate={{rotate: -90 + "deg"}}>
                <img src={arrowSVG} alt='Открыть' />
            </motion.div>
        </div>
    )
}

export default Arrow