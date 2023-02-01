//Utils
import React from 'react'
import { Helmet } from 'react-helmet'

//Components
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel'
import SMBar from '../../components/SMBar/SMBar'

//Style
import './Portfolio.css'

//Function
function Portfolio() {
  return (
    <div className="PortfolioPage">
      <Helmet>
        <title>Mascaro.dev | Portfolio</title>
      </Helmet>
      <Nav />
      <div className="PortfolioBloc">
        <h1>Portfolio</h1>
        <div className="carouselBloc">
          <Carousel />
        </div>
        <SMBar />
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
