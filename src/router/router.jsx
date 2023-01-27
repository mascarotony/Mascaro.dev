//Utils
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

//Pages
import Home from '../pages/Home/Home'
import Competences from '../pages/Competences/Competences'
import Portfolio from '../pages/Portfolio/Portfolio'
import Contact from '../pages/Contact/Contact'
import Error from '../pages/Error/Error'

//router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Competences',
    element: <Competences />
  },
  {
    path: '/Portfolio',
    element: <Portfolio />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '/*',
    element: <Error />
  }
])

export default router
