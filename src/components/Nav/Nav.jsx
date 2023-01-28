//Utils
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

//Assets
import Logo from '../../assets/images/logo.PNG'

//Style
import './Nav.css'

//Function
function Nav() {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className={`NavBar ${showMenu ? 'showBar' : 'hiddenBar'}`}>
      <div className="Logo">
        <NavLink className="backMenu" to="/" end>
          <img src={Logo} alt="Logo Mascaro.dev" />
          <b className="Title">Mascaro.dev</b>
        </NavLink>
      </div>
      <ul className="NavList">
        <li className="NavItem Slide1">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'activated' : 'link')}
            end
          >
            Accueil
          </NavLink>
        </li>
        <li className="NavItem Slide2">
          <NavLink
            to="/Competences"
            className={({ isActive }) => (isActive ? 'activated' : 'link')}
            end
          >
            Compétences
          </NavLink>
        </li>
        <li className="NavItem Slide3">
          <NavLink
            to="/Portfolio"
            className={({ isActive }) => (isActive ? 'activated' : 'link')}
            end
          >
            Portfolio
          </NavLink>
        </li>
        <li className="NavItem Slide4">
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? 'activated' : 'link')}
            end
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button className="NavBurger" onClick={handleShowMenu}>
        <span className="BurgerLine"></span>
      </button>
    </nav>
  )
}

export default Nav
