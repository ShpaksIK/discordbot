import React from 'react'
import { motion } from 'framer-motion'

import style from './style.module.css'
import closeSVG from './../../../../assets/svg/closeBlack.svg'
import { Link } from 'react-router-dom'


function CommandBlockOption(props) {
  return (
    <div className={style.blockOpt}>
      <div className={style.blockOpt_close} onClick={props.oncl}></div>
      <motion.div 
      initial={{scale: 0.6, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      transition={{duration: 0.2}}
      className={style.blockOpt_block}>
        <img src={closeSVG} onClick={props.oncl} />
        <b className={style.blockOpt_block_title}>Команда "{props.name}"</b>
        <p>{props.description}</p>
        <b>Использование:</b>
        <p><code>{props.use}</code></p>
        <b>Примечания:</b>
        <ul>
          <li>Перед написанием комады ставте префикс бота. По умолчанию "<span>?</span>". <Link className={style.link_to_doc} to="/documentation/commands">Подробнее здесь</Link></li>
        </ul>
      </motion.div>
    </div>
  )
}

export default CommandBlockOption