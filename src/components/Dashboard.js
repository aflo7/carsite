import React, { useState, useEffect } from "react"
import "../css/dash.css"
import Home from "./Home"
import News from "./News"
import Garages from "./Garages"
import "../css/settings.css"
import useStore from "../hooks/useStore"
import Settings from "./Settings"
const root = document.documentElement

const updateMode = (darkMode) => {
  if (!darkMode) {
    root.style.setProperty("--independence", "#5d576bff")
    root.style.setProperty("--opal", "#9bc1bcff")
    root.style.setProperty("--terra-cotta", "#ed6a5aff")
    root.style.setProperty("--pale-spring-bud", "#f4f1bbff")
  } else {
    // make colors darker
    root.style.setProperty("--independence", "rgb(68, 60, 88)")
    root.style.setProperty("--opal", "rgb(119, 161, 156)")
    root.style.setProperty("--terra-cotta", "rgb(177, 78, 65)")
    root.style.setProperty("--pale-spring-bud", "rgb(199, 194, 96);")
  }
}

const Dashboard = () => {
  const useStoreHook = useStore() // database hook

  const [showHome, setShowHome] = useState(true)
  const [showNews, setShowNews] = useState(false)
  const [showGarages, setShowGarages] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [darkMode, setDarkMode] = useState() // required to make dark mode slider work

  const handleActiveChange = (tab) => {
    if (tab === "home") {
      setShowHome(true)
      setShowNews(false)
      setShowGarages(false)
    } else if (tab === "news") {
      setShowHome(false)
      setShowNews(true)
      setShowGarages(false)
    } else if (tab === "garages") {
      setShowHome(false)
      setShowNews(false)
      setShowGarages(true)
    }
  }

  useEffect(() => {
    if (!useStoreHook.userData) return

    if (useStoreHook.userData.settings) {
      setDarkMode(useStoreHook.userData.settings.darkMode)
    }
  }, [useStoreHook.userData])

  useEffect(() => {
    updateMode(darkMode)
  }, [darkMode])

  return (
    <>
      <ul className="topnav">
        <li>
          <div
            className={showHome ? "active" : null}
            onClick={() => handleActiveChange("home")}
          >
            Home
          </div>
        </li>
        <li>
          <div
            className={showNews ? "active" : null}
            onClick={() => handleActiveChange("news")}
          >
            News
          </div>
        </li>
        <li>
          <div
            className={showGarages ? "active" : null}
            onClick={() => handleActiveChange("garages")}
          >
            Garages
          </div>
        </li>
        <li className="right">
          <div onClick={() => setShowSettings((prev) => !prev)}>Settings</div>
        </li>
      </ul>

      {showSettings ? (
        <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
      ) : null}

      <div>
        {showHome ? <Home /> : null}
        {showNews ? <News /> : null}
        {showGarages ? <Garages /> : null}
      </div>
    </>
  )
}

export default Dashboard
