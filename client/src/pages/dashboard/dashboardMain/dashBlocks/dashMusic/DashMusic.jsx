import React from 'react'

import style from './style.module.css'


function DashMusic({ serverData }) {
    return (
        <div className={style.main}>
            <div className={style.container}>
                {/* {serverData.id} */}
                <h1>Music</h1>
            </div>
        </div>
    )
}

export default DashMusic