//Utils
import React from 'react'

//Assets
import GHIcon from '../../assets/images/GHIcon.png'
import LIcon from '../../assets/images/LinkedInIcon.png'

//Style
import './SMBar.css'

//Function
function SMBar() {
  return (
    <div className="SocialBar">
      <ul className="SMList">
        <li className="SMLink">
          <a href="https://fr.linkedin.com/in/tony-mascaro-25b570229/en?trk=people-guest_people_search-card">
            <img src={LIcon} alt="icône LinkedIn" />
          </a>
        </li>
        <li className="SMLink">
          <a href="https://github.com/mascarotony">
            <img src={GHIcon} alt="icône GitHub" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SMBar
