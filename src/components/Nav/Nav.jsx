//Utils
import React from 'react'
import { NavLink } from 'react-router-dom'

//Style
import './Nav.css'

//Function
function Nav() {
  return (
    <div className="NavBloc">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'activated' : 'link')}
              end
            >
              Accueil
            </NavLink>
            <NavLink
              to="/Competences"
              className={({ isActive }) => (isActive ? 'activated' : 'link')}
              end
            >
              Compétences
            </NavLink>
            <NavLink
              to="/Portfolio"
              className={({ isActive }) => (isActive ? 'activated' : 'link')}
              end
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? 'activated' : 'link')}
              end
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
