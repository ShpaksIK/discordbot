import React from 'react'

import style from './style.module.css'


function DashDecor({ serverData }) {
    return (
        <div className={style.main}>
            <div className={style.container}>
                {/* {serverData.id} */}
                <h1>Decor</h1>
            </div>
        </div>
    )
}

export default DashDecor