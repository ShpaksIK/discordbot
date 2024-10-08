import React from "react"
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom"

import MainPage from './pages/main/MainPage'
import DocMain from "./pages/documentation/docMain/DocMain"
import ContactPage from './pages/contact/ContactPage'
import CommandsPage from './pages/commands/CommandsPage'
import ServerPage from "./pages/servers/ServerPage"
import ProfilePage from "./pages/profile/ProfilePage"
import DashboardPage from "./pages/dashboard/DashboardPage"

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
    { path: "servers", element: <ServerPage /> },
    { path: "profile", element: <ProfilePage /> },
    { path: "dashboard/:serverId", element: <DashboardPage activeTab="general" /> },
    { path: "dashboard/:serverId/general", element: <DashboardPage activeTab="general" /> },
    { path: "dashboard/:serverId/moderation", element: <DashboardPage activeTab="moderation" /> },
    { path: "dashboard/:serverId/audit", element: <DashboardPage activeTab="audit" /> },
    { path: "dashboard/:serverId/decor", element: <DashboardPage activeTab="decor" /> },
    { path: "dashboard/:serverId/commands", element: <DashboardPage activeTab="commands" /> },
    { path: "dashboard/:serverId/music", element: <DashboardPage activeTab="music" /> },
    { path: "dashboard/:serverId/rating", element: <DashboardPage activeTab="rating" /> },
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

export default AppWrapper