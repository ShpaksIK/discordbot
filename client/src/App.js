import React from "react";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";

import MainPage from './pages/main/MainPage'
import DocumentationPage from './pages/documentation/DocumentationPage'
import styleAll from './assets/style/styleAll.module.css'


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "documentation", element: <DocumentationPage /> },
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