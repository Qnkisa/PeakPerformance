import React from 'react'
import IndexHero from '../components/IndexHero'
import IndexBrag from '../components/IndexBrag'
import IndexBragTwo from '../components/IndexBragTwo'
import IndexTransformations from '../components/IndexTransformations'
import IndexBottom from '../components/IndexBottom'

export default function Index() {
  return (
    <div className='home'>
      <IndexHero />
      <IndexBrag/>
      <IndexBragTwo />
      <IndexTransformations />
      <IndexBottom/>
    </div>
  )
}
