import React from 'react'

import style from './style.module.css'


function DashAudit({ serverData }) {
    return (
        <div className={style.main}>
            <div className={style.container}>
                {/* {serverData.id} */}
                <h1>Audit</h1>
            </div>
        </div>
    )
}

export default DashAudit