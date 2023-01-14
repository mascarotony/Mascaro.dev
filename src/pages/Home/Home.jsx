//Utils
import React from 'react'
import { Helmet } from 'react-helmet'

//Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

//Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

//Style
import './Home.css'

function Home() {
  return (
    <div className="HomePage">
      <Helmet>
        <title>Mascaro.dev | Acceuil</title>
      </Helmet>
      <Header />
      <div className="titleBloc">
        <h1>Développeur Web</h1>
        <h2>Basé à Angers - France</h2>
        <div className="descBloc">
          <p>
            Donner vie à vos idées est ma mission. Je vous accompagne de la
            maquette à la mise en ligne de votre projet !
          </p>
        </div>
        <a href="#presBloc" className="downBtn">
          <button className="downButton">
            <span className="btn-text-one">En savoir plus !</span>
            <span className="btn-text-two">
              <FontAwesomeIcon icon={faChevronDown} className="chevronDown" />
              <FontAwesomeIcon icon={faChevronDown} className="chevronDown" />
              <FontAwesomeIcon icon={faChevronDown} className="chevronDown" />
            </span>
          </button>
        </a>
      </div>
      <div className="presBloc" id="presBloc"></div>
      <Footer />
    </div>
  )
}

export default Home
