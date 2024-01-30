<<<<<<< Updated upstream
=======
<<<<<<< HEAD
import MainPage from './pages/main/MainPage'

import styleAll from './assets/style/styleAll.module.css'


function App() {
  return (
    <div className={styleAll.app}>
      <MainPage />
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
>>>>>>> f79a399b9ce5e18b2293cf50b1dda47034d9f6bc
>>>>>>> Stashed changes
    </div>
  )
}

<<<<<<< Updated upstream
export default AppWrapper;
=======
<<<<<<< HEAD
export default App
=======
export default AppWrapper;
>>>>>>> f79a399b9ce5e18b2293cf50b1dda47034d9f6bc
>>>>>>> Stashed changes
