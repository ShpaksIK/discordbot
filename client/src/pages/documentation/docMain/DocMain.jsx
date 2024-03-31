import React from 'react'

import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import Navbar from '../navbar/Navbar'
import DocAbout from './docBlocks/docAbout/DocAbout'
import DocCommands from './docBlocks/docCommands/DocCommands'
import DocUpdates from './docBlocks/docUpdates/DocUpdates'
import DocFAQ from './docBlocks/docFAQ/DocFAQ'
import style from './style.module.css'


function DocMain({ activeTab }) {
    let currentDocBlock = activeTab

    return (
        <div>
            <Header typeMenu="doc" />
            <Navbar />
            <div className={style.docMain} id='docMain'>
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
            <Footer />
        </div>
    )
}

export default DocMain