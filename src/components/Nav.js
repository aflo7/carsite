import React from "react"
import "../css/nav.css"
import useAuth from "../hooks/useAuth"
import {
  hideLogin,
  hideLogout,
  showLogin,
  showLogout,
  showUser,
  hideUser
} from "../css/nav-styles"

const Nav = () => {
  const authHook = useAuth()

  return (
    <div className="nav-wrapper">
      <div className="logo-wrapper">
        <div className="logo-text">Carsite</div>
      </div>

      <div className="nav-user-wrapper">
        <div style={authHook.displayName ? showUser : hideUser}>
          {authHook.displayName ? authHook.displayName : null}
        </div>
        <div
          style={authHook.displayName ? hideLogin : showLogin}
          onClick={() => authHook.login()}
        >
          {authHook.displayName ? null : "Login/Register"}
        </div>
        <div
        
          style={authHook.displayName ? showLogout : hideLogout}
          onClick={() => {
            authHook.logout()
          }}
        >
          {authHook.displayName ? "Log out" : null}
        </div>
      </div>
    </div>
  )
}

export default Nav
