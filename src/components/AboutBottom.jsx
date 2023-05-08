import React from 'react'
import {Link} from "react-router-dom"

export default function AboutBottom() {
  return (
    <div className="about-bottom">
        <h5>Get in <span>touch</span> with us</h5>
        <Link to="/formpage">book a call</Link>
    </div>
  )
}
