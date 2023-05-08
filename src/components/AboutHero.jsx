import React from 'react'
import {Link} from "react-router-dom"

export default function AboutHero() {
  return (
    <div className="index-hero about-hero">
        <div className="index-hero-helper"></div>
        <div className="index-hero-content">
            <h1>Meet the team behind the <span>brand</span></h1>
            <h2>Discover our story and mission, meet our team, who will help you to transform your body and mind.</h2>
            <Link to="/formpage">Book a Call</Link>
        </div>
    </div>
  )
}
