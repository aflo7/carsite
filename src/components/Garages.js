import React, { useState, useEffect } from "react"
import "../css/garage.css"
import useGarage from "../hooks/useGarage"
import ModalComponent from "./ModalComponent"
import GarageChild from "./GarageChild"

const Garages = () => {
  const garageHook = useGarage()
  const [userGarages, setUserGarages] = useState()

  //carArray
  const createNew = (e, garageName, carOutput) => {
    e.preventDefault()
    garageHook.createGarage(garageName, carOutput)
  }

  return (
    <div className="garage-tab">
      <div className="garage-wrap">
        <div className="append-garage"></div>

        {garageHook.userGarageData // create an array of arrays from fetched data
          ? Object.entries(garageHook.userGarageData).map((item, i) => (
              <GarageChild key={i} name={item[0]} cars={item[1]} />
            ))
          : null}

        <div
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          className="modal-btn-wrap"
        >
          <div className="create-garage-text">
            <div className="create-garage-inner-txt">New garage</div>

            <span className="material-icons sub-icon">add_circle_outline</span>
          </div>
        </div>

        <ModalComponent createNew={createNew} />
      </div>
    </div>
  )
}

export default Garages
