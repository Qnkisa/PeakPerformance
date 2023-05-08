import React from 'react'
import {Link} from "react-router-dom"

export default function IndexBrag() {
  return (
    <>
      <div className="index-brag">
          <div className="index-brag-top">
            <div className="index-brag-top-div">
              <div className="index-brag-top-image">
                <img src="/throphy-icon.png" alt="" />
              </div>
              <div className="index-brag-top-content">
                <p>More than</p>
                <span>1000</span>
                <p>people coached</p>
              </div>
            </div>
            <div className="index-brag-top-div">
              <div className="index-brag-top-image">
                <img src="/people-icon.png" alt="" />
              </div>
              <div className="index-brag-top-content">
                <p>More than</p>
                <span>500 000</span>
                <p>lives influenced</p>
              </div>
            </div>
            <div className="index-brag-top-div">
              <div className="index-brag-top-image">
                <img src="/certificate-icon.png" alt="" />
              </div>
              <div className="index-brag-top-content">
                <p>More than</p>
                <span>20</span>
                <p>certificates</p>
              </div>
            </div>
          </div>
          <div className="index-brag-bottom">
            <div className="index-brag-bottom-image">
              <div className="index-brag-bottom-image-helper"></div>
              <img src="/brag-image1.jpg" alt="" />
            </div>
            <div className="index-brag-bottom-content">
              <h3>How can we <span>help</span> you?</h3>
              <p>Our mission is to help you find a balance between family, health, profession and sport, through science-based methods.</p>
              <div className="index-brag-bottom-cta">
                <div className="index-brag-bottom-cta-a">
                  <Link to="/process">The Process</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
