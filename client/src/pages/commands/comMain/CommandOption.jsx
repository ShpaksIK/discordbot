import React from 'react'
import { motion } from 'framer-motion'

import style from './style.module.css'


function CommandOption(props) {
    return (
        <motion.div
        initial={{opacity: 0, marginTop: -20 + "px"}}
        animate={{opacity: 1, marginTop: 0}}
        transition={{duration: 0.1}}
        className={style.commandOption + " " + props.clsName} onClick={props.oncl}>
            <div className={style.main_nav_command_img}>
                <img src={props.image} />
            </div>
            <div className={style.main_nav_command_text}>
                <h4>{props.title}</h4>
            </div>
            <div className={style.main_nav_command_count}>
                <p>{props.count}</p>
            </div>
        </motion.div>
    )
}

export default CommandOption