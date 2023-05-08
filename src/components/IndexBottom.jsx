import React from 'react'
import {Link} from "react-router-dom"

export default function IndexBottom() {
  return (
    <div className="index-bottom">
        <div className="index-bottom-content">
            <h6>"It is a shame to get old without seeing the beauty of your body."</h6>
            <p>Socrates</p>
        </div>
        <div className="index-bottom-cta">
            <Link to="/formpage">Book a call</Link>
        </div>
    </div>
  )
}
