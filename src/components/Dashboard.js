import React, { useState } from "react"
import "../css/dash.css"
import Home from "./Home"
import News from "./News"
import Garages from "./Garages"

const Dashboard = () => {
  const [showHome, setShowHome] = useState(true)
  const [showNews, setShowNews] = useState(false)
  const [showGarages, setShowGarages] = useState(false)

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
  return (
    <>
      <ul className="topnav">
        <li>
          <div className={showHome ? "active" : null} onClick={() => handleActiveChange("home")}>
            Home
          </div>
        </li>
        <li>
          <div className={showNews ? "active" : null} onClick={() => handleActiveChange("news")}>News</div>
        </li>
        <li>
          <div className={showGarages ? "active" : null} onClick={() => handleActiveChange("garages")}>Garages</div>
        </li>
        <li className="right">
          <div>Settings</div>
        </li>
      </ul>

      <div>
        {showHome ? <Home /> : null}
        {showNews ? <News /> : null}
        {showGarages ? <Garages /> : null}
      </div>
    </>
  )
}

export default Dashboard
