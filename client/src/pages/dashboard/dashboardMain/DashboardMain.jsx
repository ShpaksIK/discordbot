import React from 'react'

import DashGeneral from './dashBlocks/dashGeneral/DashGeneral'
import DashAudit from './dashBlocks/dashAudit/DashAudit'
import DashCommands from './dashBlocks/dashCommands/DashCommands'
import DashDecor from './dashBlocks/dashDecor/DashDecor'
import DashModer from './dashBlocks/dashModer/DashModer'
import DashMusic from './dashBlocks/dashMusic/DashMusic'
import DashRating from './dashBlocks/dashRating/DashRating'
import ButtonSaveSettings from '../../../components/buttonSaveSettings/ButtonSaveSettings'

import style from './style.module.css'


function DashboardMain({ serverData, activeTab }) {

    return (
        <div className={style.main}>
            <div className={style.container}>
                {activeTab === "general" && (
                    <DashGeneral serverData={serverData} />
                )}
                {activeTab === "moderation" && (
                    <DashModer serverData={serverData} />
                )}
                {activeTab === "audit" && (
                    <DashAudit serverData={serverData} />
                )}
                {activeTab === "decor" && (
                    <DashDecor serverData={serverData} />
                )}
                {activeTab === "commands" && (
                    <DashCommands serverData={serverData} />
                )}
                {activeTab === "music" && (
                    <DashMusic serverData={serverData} />
                )}
                {activeTab === "rating" && (
                    <DashRating serverData={serverData} />
                )}
            </div>
        </div>
    )
}

export default DashboardMain