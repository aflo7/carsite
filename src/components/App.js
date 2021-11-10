import React from "react"
import useAuth from "../hooks/useAuth"
import Dashboard from "./Dashboard"
import Home from "./Home"
import "../css/app.css"

function App() {
  const authHook = useAuth()

  if (!authHook.displayName) {
    return <Home />
  } else {
    return <Dashboard />
  }
}

export default App
