import React from "react";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom"

import MainPage from './pages/main/MainPage'
// import DocumentationPage from './pages/documentation/DocumentationPage'
// import DocAbout from "./pages/documentation/docMain/docBlocks/docAbout/DocAbout"
// import DocCommands from "./pages/documentation/docMain/docBlocks/docCommands/DocCommands"
// import DocFAQ from "./pages/documentation/docMain/docBlocks/docFAQ/DocFAQ"
// import DocUpdates from "./pages/documentation/docMain/docBlocks/docUpdates/DocUpdates"
import DocMain from "./pages/documentation/docMain/DocMain";
import ContactPage from './pages/contact/ContactPage'
import CommandsPage from './pages/commands/CommandsPage'
import styleAll from './assets/style/styleAll.module.css'
import './pages/main/intro/animation.css'


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "documentation", element: <DocMain activeTab="about" /> },
    { path: "documentation/general", element: <DocMain activeTab="about" /> },
    { path: "documentation/commands", element: <DocMain activeTab="commands" /> },
    { path: "documentation/faq", element: <DocMain activeTab="FAQ" /> },
    { path: "documentation/updates", element: <DocMain activeTab="updates" /> },
    { path: "contact", element: <ContactPage /> },
    { path: "commands", element: <CommandsPage /> },
  ])
  return routes
}

const AppWrapper = () => {
  return (
    <div className={styleAll.app}>
      <Router>
        <App />
      </Router>
    </div>
  )
}

export default AppWrapper;