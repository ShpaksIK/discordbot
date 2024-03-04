import React, { useState } from 'react'
import { motion } from 'framer-motion'

import style from './style.module.css'
import CommandBlockOption from './commandBlockOption/CommandBlockOption'


function CommandList({ commands }) {
  // const [FindCommand, setFindCommand] = useState(true)
  // const handleFindCommand = () => setFindCommand((FindCommand) => !FindCommand)
  const [setShowBlock, setSelectedBlock] = useState(false)
  const handleBlockClick = () => setSelectedBlock((setShowBlock) => !setShowBlock)
  const [blockOption, setBlockOption] = useState({
    name: "",
    description: "",
    use: ""
  })
  const openCommandBlockOption = (command) => {
    setBlockOption({
      name: command.name,
      description: command.description,
      use: command.use
    })
    handleBlockClick()
  }
  // if (commands.length === 0) {
  //   handleFindCommand()
  // }

  return (
    <motion.div
    initial={{opacity: 0, marginTop: -10 + "px"}}
    animate={{opacity: 1, marginTop: 0}}
    transition={{duration: 0.2}}
    >
      {commands.map((command) => (
        <div key={command.name} className={style.main_commands_com} onClick={() => openCommandBlockOption(command)}>
          <div className={style.main_commands_com_name}>{command.name}</div>
          <p>— {command.description}</p>
        </div>
      ))}
      {setShowBlock && (
        <div className={style.option}>
          <CommandBlockOption name={blockOption.name} description={blockOption.description} use={blockOption.use} oncl={() => openCommandBlockOption("")} />
        </div>
      )}
    </motion.div>
  )
}

export default CommandList