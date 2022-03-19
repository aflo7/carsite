import { useState } from "react"
import useStore from "../hooks/useStore"

const Settings = ({ darkMode, setDarkMode }) => {
  const useStoreHook = useStore() // database hook
  const [slider, setSlider] = useState(darkMode)

  return (
    <div className="settings-wrap">
      <div className="settings-panel">
        <div className="dark-mode-wrapper">
          <div className="dark-mode-txt">Dark mode</div>

          <label className="switch">
            <input
              type="checkbox"
              checked={slider}
              onChange={() => {
                
                useStoreHook.handleChange("darkMode") // change in database
                setSlider((prev) => !prev) // change state value so slider can work
                setDarkMode(prev => !prev) // change in state
              }}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Settings
