//Utils
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages
import Home from './pages/Home/Home'

//Style
import './index.css'

//Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

//Render
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
