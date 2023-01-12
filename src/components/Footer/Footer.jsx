/* eslint-disable jsx-a11y/anchor-is-valid */
//Utils
import React from 'react'

//Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

//Style
import './Footer.css'

//Function
function Footer() {
  return (
    <div className="footerBloc">
      <a href="#">
        <FontAwesomeIcon icon={faChevronUp} className="chevronIcon" />
        <span>Retour en haut de page</span>
        <FontAwesomeIcon icon={faChevronUp} className="chevronIcon" />
      </a>
      <b>© - Mascaro.dev - 2023</b>
      <p>Tous droits réservés</p>
    </div>
  )
}

export default Footer
