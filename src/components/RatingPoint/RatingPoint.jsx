//Utils
import React from 'react'

//Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

//Style
import './RatingPoint.css'

//Function
function RatingPoint(props) {
  let ratePoint = props.rating

  const maxPoint = 5
  const points = []

  for (let i = 1; i < maxPoint + 1; i++) {
    if (i <= ratePoint) {
      points.push(
        <FontAwesomeIcon icon={faLaptopCode} className="ratePoint-Active" />
      )
    } else {
      points.push(<FontAwesomeIcon icon={faLaptopCode} className="ratePoint" />)
    }
  }

  return <div className="rateBloc">{points}</div>
}

export default RatingPoint
