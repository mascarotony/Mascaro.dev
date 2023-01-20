//Utils
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages
import Home from './pages/Home/Home'
import Competences from './pages/Competences/Competences'
import Portfolio from './pages/Portfolio/Portfolio'

//Style
import './index.css'

//Router
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
  }
])

//Render
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
