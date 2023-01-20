//Utils
import React from 'react'
import { useState } from 'react'

//Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

//Datas
import PortItem from '../../assets/datas/Project'

//Style
import './Carousel.css'

//Function
function Carousel(slides) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <div className="Carousel">
      <button className="slideVector">
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} />
      </button>
      {PortItem.map((project, index) => (
        <div className="CarouselItem" key={index}>
          {index === current && (
            <>
              <a href={project.url}>
                <img src={project.img} alt={project.imgAlt} />
              </a>
              <div className="ItemDesc">
                <b>{project.title}</b>
                <p>{project.desc}</p>
              </div>
            </>
          )}
        </div>
      ))}
      <button className="slideVector">
        <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} />
      </button>
    </div>
  )
}

export default Carousel
