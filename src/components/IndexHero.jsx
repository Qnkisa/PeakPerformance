import React,{useState} from 'react'
import {Link} from "react-router-dom"


export default function IndexHero() {
  return (
    <div className="index-hero">
        <div className="index-hero-helper"></div>
        <div className="index-hero-content">
            <h1>We help people to <span>get</span> in shape and <span>keep</span> their results</h1>
            <h2>Harness the power of the onilne coaching to achieve your fitness goals! Join our program and transform your health today.</h2>
            <Link to="/formpage">Book a Call</Link>
        </div>
    </div>
  )
}
