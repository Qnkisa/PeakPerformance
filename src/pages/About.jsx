import React from 'react'
import AboutHero from '../components/AboutHero'
import AboutFounders from '../components/AboutFounders'
import AboutCoaches from '../components/AboutCoaches'
import AboutBottom from '../components/AboutBottom'

export default function About() {
  return (
    <div className="about">
      <AboutHero/>
      <AboutFounders/>
      <AboutCoaches/>
      <AboutBottom/>
    </div>
  )
}
