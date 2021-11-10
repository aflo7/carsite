import React from "react"
import "../css/garage-child.css"

const GarageChild = ({ name, cars }) => {
  return (
    <div className="garage-child-wrap">
      <div className="garage-name">{name}</div>

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
