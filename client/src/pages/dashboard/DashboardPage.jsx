import React from 'react'
import { useParams } from "react-router-dom"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import DashboardMain from './dashboardMain/DashboardMain'

import style from './style.module.css'
import getServerData from './../../modules/getServerData'


function DashboardPage() {
    const { serverId } = useParams()
    const serverData = getServerData(serverId)
    console.log(serverData)

    return (
        <div className={style.dashboard}>
            <Header />
            <DashboardMain serverData={serverData} />
            <Footer />
        </div>
    )
}

export default DashboardPage