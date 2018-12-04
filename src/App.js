import React from 'react'

import 'bulma/css/bulma.min.css'
import './App.scss'

import Hero from './components/Hero'
import CheatsSection from './components/sections/Cheats.component'

export default () => (
  <div className="container">
    <Hero />
    <CheatsSection />
  </div>
)
