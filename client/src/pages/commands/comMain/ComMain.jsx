import React, { useState } from 'react'

import CommandOption from './CommandOption'
import CommandList from './CommandsList'
import style from './style.module.css'
import searchSVG from './../../../assets/svg/search.svg'
import allCommandsSVG from './../../../assets/svg/allCommands.svg'
import informationCommandsSVG from './../../../assets/svg/informationCommands.svg'
import moderCommandsSVG from './../../../assets/svg/moderCommands.svg'
import fireworkCommandsSVG from './../../../assets/svg/fireworkCommands.svg'
import musicCommandsSVG from './../../../assets/svg/musicCommands.svg'
import settingsCommandsSVG from './../../../assets/svg/settingsCommands.svg'
import { botName } from './../../../api'


function ComMain() {
    const [isFindCommand, setIsFindCommand] = useState(false)
    const [selectedGroup, setSelectedGroup] = useState('')
    const [showAll, setShowAll] = useState(true)
    const handleGroupClick = (group) => {
        setSelectedGroup(group)
        setShowAll(false)
    }
    const handleAllClick = () => {
        setSelectedGroup('')
        setShowAll(true)
    }
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
        const filtered = filterCommands([...listCommands.general, ...listCommands.moderation], event.target.value)
        console.log(filtered)
        if (filtered.length === 0) {
            setIsFindCommand(true)
            setShowAll(false)
        } else {
            setIsFindCommand(false)
            setShowAll(true)
        }
    }   
    const filterCommands = (commands, searchTerm) => {
        if (!searchTerm) {
          return commands
        }
        return commands.filter((command) =>
          command.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }
    const listCommands = {
        "general": [ 
            {
                "name": "help",
                "description": "справка по всем командам",
                "use": "help"
            },
            {
                "name": "bot",
                "description": `информация о ${botName}`,
                "use": "bot"
            },
            {
                "name": "server",
                "description": "информация о сервере",
                "use": "server"
            },
            {
                "name": "user",
                "description": "информация о пользователе",
                "use": "user [@Пользователь]"
            },
        ],
        "moderation": [ 
            {
                "name": "ban",
                "description": "блокировка пользователя на сервере",
                "use": "ban <@Пользователь> [длительность] [причина]"
            },
            {
                "name": "unban",
                "description": "снятие блокировки пользователя на сервере",
                "use": "unban <@Пользователь>"
            },
            {
                "name": "kick",
                "description": "изгнание пользователя с сервера",
                "use": "kick <@Пользователь> [причина]"
            },
            {
                "name": "mute",
                "description": "блокировка текстовых каналов пользователя на сервере",
                "use": "mute <@Пользователь> [длительность] [причина]"
            },
            {
                "name": "unmute",
                "description": "снятие блокировки текстовых каналов пользователя на сервере",
                "use": "unmute <@Пользователь>"
            },
            {
                "name": "vmute",
                "description": "блокировка голосовых каналов пользователя на сервере",
                "use": "vmute <@Пользователь> [длительность] [причина]"
            },
            {
                "name": "vunmute",
                "description": "снятие блокировки голосовых каналов пользователя на сервере",
                "use": "vunmute <@Пользователь>"
            },
            {
                "name": "warn",
                "description": "выдача предупреждения пользователю на сервере",
                "use": "warn <@Пользователь> [причина]"
            },
            {
                "name": "unwarn",
                "description": "снятие предупреждения пользователя на сервере",
                "use": "warn <@Пользователь>"
            },
            {
                "name": "clearwarns",
                "description": "снятие всех предупреждений пользователя на сервере",
                "use": "clearwarns <@Пользователь>"
            },
            {
                "name": "warns",
                "description": "просмотр списка текущих предупреждений пользователя",
                "use": "warns <@Пользователь>"
            },
            {
                "name": "clear",
                "description": "отчистка последних сообщений пользователя в текущем канале",
                "use": "clear <@Пользователь> <количество>"
            },
            {
                "name": "role",
                "description": "выдача роли пользователю на сервере",
                "use": "role <@Пользователь> <@Роль>"
            },
        ],
        "fun": [
            {
                "name": "rand",
                "description": "выводит случайное число в заданном диапазоне",
                "use": "rand [Xmin] [Xmax]"
            }
        ]
    }
    
    return (
        <div className={style.main}>
            <div className={style.main_container}>
                <div className={style.main_info}>
                    <div className={style.main_title}>
                        <h2>Команды</h2>
                    </div>
                    <div className={style.main_left}>
                        <div className={style.main_search}>
                            <div className={style.main_search_img}>
                                <img src={searchSVG} alt='Найти' />
                            </div>
                            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Найти команду..." />
                        </div>
                        <div className={style.main_nav}>
                            <CommandOption title="Все" image={allCommandsSVG} count={listCommands.general.length + listCommands.moderation.length} oncl={handleAllClick}/>
                            <CommandOption title="Общие" image={informationCommandsSVG} count={listCommands.general.length} oncl={() => handleGroupClick('general')} />
                            <CommandOption title="Модерирование" image={moderCommandsSVG} count={listCommands.moderation.length} oncl={() => handleGroupClick('moderation')} />
                            <CommandOption title="Развлечение" image={fireworkCommandsSVG} count="99" />
                            <CommandOption title="Музыка" image={musicCommandsSVG} count="99" />
                            <CommandOption title="Утилиты" image={settingsCommandsSVG} count="99" />
                        </div>
                    </div>
                </div>
                <div className={style.main_commands}>
                {isFindCommand && (
                    <div className={style.commandNotFound}>
                        <p>Команда не найдена</p>
                    </div>
                )}
                {selectedGroup && !showAll && (
                    <CommandList commands={filterCommands(listCommands[selectedGroup], searchTerm)} />
                )}
                {showAll && (
                    <CommandList
                        commands={filterCommands([...listCommands.general, ...listCommands.moderation], searchTerm)}
                    />
                )}
                </div>
            </div>
        </div>
    )
}

export default ComMain