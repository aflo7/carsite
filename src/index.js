import React from "react"
import "./firebase"
import ReactDOM from "react-dom"
import "./css/index.css"
import App from "./components/App"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ChatBtn from "./components/ChatBtn"

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
    <ChatBtn />
  </React.StrictMode>,
  document.getElementById("root")
)
