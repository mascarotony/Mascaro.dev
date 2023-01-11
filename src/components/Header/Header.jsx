//Utils
import React from 'react'

//Components
import Nav from '../Nav/Nav'

//Assets
import Logo from '../../assets/images/logo.PNG'

//Style
import './Header.css'

//Function
function Header() {
  return (
    <div className="headerBloc">
      <img className="logo" src={Logo} alt="Logo Mascaro.dev" />
      <div className="title">
        <b>Mascaro.dev</b>
      </div>
      <Nav />
    </div>
  )
}

export default Header
