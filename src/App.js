import React from 'react'

import 'bulma/css/bulma.min.css'
import './App.scss'

import Hero from './components/Hero'
import CheatsSection from './components/cheats/sections/component'
import Search from './components/search/Section.container'


export default () => (
  <div className="container">
    <Hero />
    <Search />
    <CheatsSection />
  </div>
)
