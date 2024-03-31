import React from 'react'

import style from './style.module.css'


function DashboardMain({ serverData }) {

    return (
        <div className={style.main}>
            <div className={style.container}>
                {serverData.id}
            </div>
        </div>
    )
}

export default DashboardMain