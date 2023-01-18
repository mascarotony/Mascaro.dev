//Utils
import React from 'react'
import { Helmet } from 'react-helmet'

//Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

//Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

//Datas
import ProjectItem from '../../assets/datas/Project'

//Style
import './Portfolio.css'

//Function
function Portfolio() {
  const ProjectsList = () => (
    <div className="portContainer">
      <div className="carousel">
        {ProjectItem.map((item) => {
          return (
            <div className="carouselItem" key={item.id}>
              <button className="navButton">
                <FontAwesomeIcon icon={faChevronCircleLeft} />
              </button>
              <a href={item.url}>
                <b>{item.title}</b>
                <img src={item.img} alt={item.imgAlt} />
                <p>{item.desc}</p>
              </a>
              <button className="navButton">
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="PortfolioPage">
      <Helmet>
        <title>Mascaro.dev | Portfolio</title>
      </Helmet>
      <Header />
      <div className="PortfolioBloc">
        <h1>Portfolio</h1>
        <ProjectsList />
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
