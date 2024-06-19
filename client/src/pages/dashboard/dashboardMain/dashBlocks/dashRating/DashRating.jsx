import React from 'react'

import style from './style.module.css'


function DashRating({ serverData }) {
    return (
        <div className={style.main}>
            <div className={style.container}>
                {/* {serverData.id} */}
                <h1>Rating</h1>
            </div>
        </div>
    )
}

export default DashRating