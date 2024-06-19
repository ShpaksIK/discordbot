import React from 'react'

import style from './style.module.css'


function DashCommands({ serverData }) {
    return (
        <div className={style.main}>
            <div className={style.container}>
                {/* {serverData.id} */}
                <h1>Commands</h1>
            </div>
        </div>
    )
}

export default DashCommands