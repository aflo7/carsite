import React from "react"
import "../css/garage-child.css"
import useGarage from "../hooks/useGarage"

const GarageChild = ({ name, cars, deleteGarage, setDeleting }) => {
  const garageHook = useGarage()

  return (
    <div className="garage-child-wrap">
      <div className="garage-name">
        <div>{name}</div>
        <div className="garage-child-del-btn" onClick={() => {setDeleting(true); deleteGarage(name)}}>Delete</div>
      </div>

      <div className="cars-in-garage">
        {cars.map((car, i) => (
          <Car key={i} car={car} />
        ))}
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
