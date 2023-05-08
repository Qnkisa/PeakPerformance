import React from 'react'
import {Link} from "react-router-dom"

export default function ProcessHero() {
  return (
    <div className="index-hero process-hero">
        <div className="index-hero-helper"></div>
        <div className="index-hero-content">
            <h1> <span>Working</span> with us is easy</h1>
            <h2>Our program serves as a fundamental foundation upon which everyone can build and further develop their form. To understand how we achieve these goals, it is important to learn more about our process, which has been tested with over 1000 successful customers!</h2>
            <Link to="/formpage">Book a Call</Link>
        </div>
    </div>
  )
}
