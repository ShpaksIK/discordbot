import React from 'react'

import DocAbout from './docBlocks/docAbout/DocAbout'
import DocCommands from './docBlocks/docCommands/DocCommands'
import DocUpdates from './docBlocks/docUpdates/DocUpdates'
import DocFAQ from './docBlocks/docFAQ/DocFAQ'
import style from './style.module.css'


function DocMain({ activeTab }) {
    let currentDocBlock = activeTab

    return (
        <div className={style.docMain}>
            {currentDocBlock === "about" && (
                <DocAbout />
            )}
            {currentDocBlock === "commands" && (
                <DocCommands />
            )}
            {currentDocBlock === "updates" && (
                <DocUpdates />
            )}
            {currentDocBlock === "FAQ" && (
                <DocFAQ />
            )}
        </div>
    )
}

export default DocMain