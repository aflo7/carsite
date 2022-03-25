import React, { useEffect } from "react"
import "../css/footer.css"

const Footer = () => {

  useEffect(() => {
    
  }, [])

  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <button href="#">Web design</button>
                </li>
                <li>
                  <button href="#">Development</button>
                </li>
                <li>
                  <button href="#">Hosting</button>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <button href="#">Company</button>
                </li>
                <li>
                  <button href="#">Team</button>
                </li>
                <li>
                  <button href="#">Careers</button>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Carsite</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className="col item social">
              <button></button>
              <button href="#">
                <i className="icon ion-social-facebook"></i>
              </button>
              <button href="#">
                <i className="icon ion-social-twitter"></i>
              </button>
              <button href="#">
                <i className="icon ion-social-snapchat"></i>
              </button>
              <button href="#">
                <i className="icon ion-social-instagram"></i>
              </button>
            </div>
          </div>
          <p className="copyright">Company Name © 2018</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
