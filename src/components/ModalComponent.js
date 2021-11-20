import { useState } from "react"
import "../css/modal.css"

const ModalComponent = ({ createNew }) => {
  const [garageName, setGarageName] = useState("")
  const [carOutput, setCarOutput] = useState([
    { car: "", color: "", year: "" },
    { car: "", color: "", year: "" },
    { car: "", color: "", year: "" }
  ])

  const handleChange = (index, field, e) => {
    let arr = carOutput
    arr[index][field] = e.target.value
    setCarOutput(arr)
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <form
          className="modal-content"
          onSubmit={(e) => createNew(e, garageName, carOutput)}
        >
          <div className="modal-header">
            <input
              placeholder="Garage name..."
              required
              onChange={(e) => setGarageName(e.target.value)}
            ></input>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body modal-user-inputs">
            <div className="user-car-wrap">
              <input
                placeholder="Car..."
                onChange={(e) => handleChange(0, "car", e)}
              ></input>
              <input
                placeholder="Color..."
                onChange={(e) => handleChange(0, "color", e)}
              ></input>
              <input
                placeholder="Year..."
                onChange={(e) => handleChange(0, "year", e)}
              ></input>
            </div>
            <div className="user-car-wrap">
              <input
                placeholder="Car..."
                onChange={(e) => handleChange(1, "car", e)}
              ></input>
              <input
                placeholder="Color..."
                onChange={(e) => handleChange(1, "color", e)}
              ></input>
              <input
                placeholder="Year..."
                onChange={(e) => handleChange(1, "year", e)}
              ></input>
            </div>

            <div className="user-car-wrap">
              <input
                placeholder="Car..."
                onChange={(e) => handleChange(2, "car", e)}
              ></input>
              <input
                placeholder="Color..."
                onChange={(e) => handleChange(2, "color", e)}
              ></input>
              <input
                placeholder="Year..."
                onChange={(e) => handleChange(2, "year", e)}
              ></input>
            </div>
            
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" value="Submit" className="btn btn-primary">
              Create Garage
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalComponent
