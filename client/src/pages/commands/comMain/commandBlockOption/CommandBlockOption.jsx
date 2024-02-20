import React from 'react'

import style from './style.module.css'
import closeSVG from './../../../../assets/svg/closeBlack.svg'
import { Link } from 'react-router-dom'


function CommandBlockOption(props) {
  return (
    <div className={style.blockOpt}>
      <div className={style.blockOpt_close} onClick={props.oncl}></div>
      <div className={style.blockOpt_block}>
        <img src={closeSVG} onClick={props.oncl} />
        <b className={style.blockOpt_block_title}>Команда "{props.name}"</b>
        <p>{props.description}</p>
        <b>Использование:</b>
        <p><code>{props.use}</code></p>
        <b>Примечания:</b>
        <ul>
          <li>Перед написанием комады ставте префикс бота. По умолчанию "<span>?</span>". <Link className={style.link_to_doc} to="/documentation">Подробнее здесь</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default CommandBlockOption