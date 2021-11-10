import React from "react"
import "../css/home.css"
import garage from "../images/garage.png"
import buySell from "../images/buy-sell.jpeg"
import carNews from "../images/car-news.png"
import vin from "../images/vin.jpeg"

const Home = () => {
  return (
    <div>
      <div className="search-price-wrapper">
        <div className="search-price-text">Search for car prices</div>

        <div className="buy-sell-wrapper">
          <img src={buySell} alt="buy? sell?" className="buy-sell-image" />
        </div>
      </div>

      <div className="save-cars-wrapper">
        <div className="save-cars-txt">
          Create "garages" - places to store your car info
        </div>

        <div className="garage-img-wrapper">
          <img src={garage} alt="garage" className="garage-img" />

          <img src={garage} alt="garage" className="garage-img" />

          <img src={garage} alt="garage" className="garage-img" />
        </div>
      </div>

      <div className="news-home-wrapper">
        <div className="news-text">Browse car news</div>
        <div className="car-news-image-wrapper">
          <img src={carNews} alt="car-news" className="car-news-img" />
        </div>
      </div>

      <div className="more-wrapper">
        <div className="more-text">Search for vins, models, and more</div>
        <div className="vin-wrap">
          <img src={vin} alt="vin" className="vin-image" />
        </div>
      </div>
    </div>
  )
}

export default Home
