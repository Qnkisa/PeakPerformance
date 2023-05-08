import React from 'react'
import {Link} from "react-router-dom"

export default function ProcessBottom() {
  return (
    <div className="process-bottom">
      <h3>Join <span>us</span></h3>
      <Link to="/formpage">Book a call</Link>
    </div>
  )
}
