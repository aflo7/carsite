import React from "react"
import "../css/garage-child.css"

const GarageChild = ({ garageName, details, deleteGarage }) => {

  return (
    <div className="garage-child-wrap">
      <div className="garage-name">
        <div>{garageName}</div>
        <div
          className="garage-child-del-btn"
          onClick={() => {
            deleteGarage(garageName)
          }}
        >
          Delete
        </div>
      </div>

      <div className="cars-in-garage">
        {details ? details.map((car, i) => <Car key={i} car={car} />) : null}
      </div>
    </div>
  )
}

const Car = ({ car }) => {
  return (
    <div className="car-wrap">
      <div>{car.car}</div>

      <div>{car.color}</div>
      <div>{car.year}</div>
    </div>
  )
}

export default GarageChild
