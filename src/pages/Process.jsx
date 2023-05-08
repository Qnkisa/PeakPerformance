import React from 'react'
import ProcessHero from '../components/ProcessHero'
import ProcessMain from '../components/ProcessMain'
import ProcessBottom from '../components/ProcessBottom'

export default function Process() {
  return (
    <div className="process">
      <ProcessHero/>
      <ProcessMain/>
      <ProcessBottom />
    </div>
  )
}
