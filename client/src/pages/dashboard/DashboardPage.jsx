import React from 'react'
import { useParams } from "react-router-dom"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Navbar from './navbar/Navbar'
import DashboardMain from './dashboardMain/DashboardMain'

import style from './style.module.css'
import getServerData from './../../modules/getServerData'


function DashboardPage({ activeTab }) {
    const { serverId } = useParams()
    const serverData = getServerData(serverId)
    
    return (
        <div className={style.dashboard}>
            <Header />
            <Navbar serverId={serverId} />
            <DashboardMain serverData={serverData} activeTab={activeTab} />
            <Footer />
        </div>
    )
}

export default DashboardPage