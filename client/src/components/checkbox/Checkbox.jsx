import React, { useState } from 'react'
import { motion } from 'framer-motion'

import style from './style.module.css'
import checkMarkSVG from './../../assets/svg/checkMark.svg'


function Checkbox({ defaultState }) {
    const [showCheckMark, setShowCheckMark] = useState(defaultState)
    const changeShowCheckMark = () => setShowCheckMark((showCheckMark) => !showCheckMark)

    return (
        <div className={style.checkbox} onClick={changeShowCheckMark}>
            {showCheckMark && (
                <div className={style.checkbox_box}>
                    {/* <div className={style.checkMark_element + " " + style.checkMark_element1}></div>
                    <div className={style.checkMark_element + " " + style.checkMark_element2}></div> */}
                    <img src={checkMarkSVG} />
                </div>
            )}
            {!showCheckMark && (
                <div className={style.checkbox_box}></div>
            )}
        </div>
    )
}

export default Checkbox