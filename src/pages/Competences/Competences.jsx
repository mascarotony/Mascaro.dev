//Utils
import React from 'react'
import { Helmet } from 'react-helmet'

//Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import RatingPoint from '../../components/RatingPoint/RatingPoint'

//Datas
import CompItem from '../../assets/datas/Comp'
import MyCV from '../../assets/download/CV - Mascaro.dev.pdf'

//Style
import './Competences.css'

//Function
function Competences() {
  const CompsList = () => (
    <div className="compList">
      {CompItem.map(item => {
        return (
          <div className="compCard" key={item.id}>
            <div className="cardImg">
              <img src={item.icon} alt={item.iconAlt} />
            </div>
            <h3 className="cardTitle">{item.title}</h3>
            <RatingPoint rating={item.rating} />
          </div>
        )
      })}
    </div>
  )

  return (
    <div className="CompetencesPage">
      <Helmet>
        <title>Mascaro.dev | Compétences</title>
      </Helmet>
      <Header />
      <div className="CompBloc">
        <h1>Compétences</h1>
        <b>Survolez les compétences pour connaître mon niveau !</b>
        <CompsList />
        <p className="cvLink">
          Vous pouvez{' '}
          <a href={MyCV} download>
            Télécharger mon CV
          </a>{' '}
          pour plus d'informations sur mes expériences précédentes.
        </p>
        <b>D'autres compétences apparaîtront avec l'expérience ...</b>
      </div>
      <Footer />
    </div>
  )
}

export default Competences
