import React from 'react'

import style from './style.module.css'
import { Link } from 'react-router-dom'


function ServerMain() {
    // Перенесенные объекты
    let sortServers = []

    // Список объектов (серверов)
    const listServers = [
        {
            "id": 1,
            "title": "Shpaks Server TOP",
            "img": "https://img.myloview.ru/murals/premium-vector-cc-logo-beautiful-logotype-for-luxury-branding-elegant-and-stylish-design-for-your-company-in-gold-color-700-220852905.jpg",
            "online": 100
        },
        {
            "id": 2,
            "title": "Shpaks Server TOP",
            "img": "https://img.myloview.ru/murals/premium-vector-cc-logo-beautiful-logotype-for-luxury-branding-elegant-and-stylish-design-for-your-company-in-gold-color-700-220852905.jpg",
            "online": 100
        },
        {
            "id": 3,
            "title": "Shpaks Server TOP",
            "img": "https://img.myloview.ru/murals/premium-vector-cc-logo-beautiful-logotype-for-luxury-branding-elegant-and-stylish-design-for-your-company-in-gold-color-700-220852905.jpg",
            "online": 100
        },
    ]

    // Перенос объектов из listServers в sortServers
    // и сортировка по массивам (1 массив содержит 2 объекта)
    for (let i=0; i<listServers.length; i+=2) {
        const serversSlice = listServers.slice(i, i+2)
        sortServers.push(serversSlice)
    }
    
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h2>Выберите сервер</h2>
                <div className={style.servers}>
                    {sortServers.map((block) => (
                        <div key={block} className={style.servers_row}>
                            {block.map((server) => (
                                <div key={server.id} className={style.servers_row_server}>
                                    <Link to={`/dashboard/${server.id}`}>
                                        <div className={style.server_img}>
                                            <img src={server.img} />
                                        </div>
                                        <div className={style.server_info}>
                                            <div className={style.server_info_header}> 
                                                <div className={style.server_info_header_img}>
                                                    <img src={server.img} />
                                                </div>
                                                <div className={style.server_info_header_title}>
                                                    <h3>{server.title}</h3>
                                                </div>
                                            </div>
                                            <div className={style.server_info_footer}> 
                                                <p>Онлайн сервера: {server.online}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServerMain