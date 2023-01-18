//Utils
import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

//Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

//Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import ProfilePic from '../../assets/images/ProfilePic.jpg'

//Style
import './Home.css'

//Function
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
      <div className="presBloc" id="presBloc">
        <h3>Présentation</h3>
        <div className="presDesc">
          <div className="profilePicBloc">
            <img
              className="ProfilePic"
              src={ProfilePic}
              alt="Portrait de moi-même"
            />
          </div>
          <div className="presText">
            <p>
              Bonjour,
              <br />
              Je m'appelle Tony Mascaro et je suis développeur Web Full-stack.
            </p>
            <p>
              Passionné depuis toujours par les nouvelles technologies, je me
              suis lancé dans le monde du développement web, car comme on le
              sait tous, le monde de demain tient dans notre poche !
            </p>
            <p>
              Pour plus d'informations sur mes conaissances, je vous invite à
              vous rendre sur la page{' '}
              <NavLink to="/Competences" end>
                compétences
              </NavLink>{' '}
              .
              <br />
              Vous souhaitez découvrir mes dernières créations,{' '}
              <NavLink to="/Portfolio" end>
                cliquez ici
              </NavLink>{' '}
              !
              <br />
              Mon travail vous intéresse,{' '}
              <NavLink to="/Contact" end>
                contactez-moi
              </NavLink>{' '}
              !
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
