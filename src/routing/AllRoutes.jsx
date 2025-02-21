import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'


export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path='/'></Route>
        <Route element={<About />} path='/about'></Route>
        <Route element={<Contact />} path='/contact'></Route>
        <Route element={<Gallery />} path='/gallery'></Route>
      </Routes>
    </div>
  )
}
