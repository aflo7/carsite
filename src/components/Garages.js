import React, { useState, useEffect } from "react"
import "../css/garage.css"
import useStore from "../hooks/useStore"
import ModalComponent from "./ModalComponent"
import GarageChild from "./GarageChild"

const Garages = () => {
  const useStoreHook = useStore()
  const [deleting, setDeleting] = useState(false)
  const [garages, setGarages] = useState()

  useEffect(() => {
    if (!useStoreHook.userData) return
    if (useStoreHook.userData.garages) {
      setGarages(useStoreHook.userData.garages)
    }
  }, [useStoreHook.userData])

  const deleteGarage = async (name) => {
    await useStoreHook.deleteGarage(name)

    setDeleting(false)
  }

  const createNew = (e, garageName, carOutput) => {
    e.preventDefault()
    useStoreHook.createGarage(garageName, carOutput)
  }

  return (
    <>
      {deleting ? <div className="deleting-bar">Deleting...</div> : null}

      <div className="garage-tab">
        <div className="garage-wrap">
          <div className="append-garage">
            {garages
              ? Object.keys(garages).map((item, i) => (
                  <GarageChild
                    key={i}
                    garageName={item}
                    details={garages[item]}
                    deleteGarage={deleteGarage}
                  />
                ))
              : null}
          </div>

          <div
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            className="modal-btn-wrap"
          >
            <div className="create-garage-text">
              <div className="create-garage-inner-txt">New garage</div>

              <span className="material-icons sub-icon">
                add_circle_outline
              </span>
            </div>
          </div>

          <ModalComponent createNew={createNew} />
        </div>
      </div>
    </>
  )
}

export default Garages
