//Utils
import React from 'react'
import { Helmet } from 'react-helmet'

//Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel'

//Style
import './Portfolio.css'

//Function
function Portfolio() {
  return (
    <div className="PortfolioPage">
      <Helmet>
        <title>Mascaro.dev | Portfolio</title>
      </Helmet>
      <Header />
      <div className="PortfolioBloc">
        <h1>Portfolio</h1>
        <div className="carouselBloc">
          <Carousel />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
