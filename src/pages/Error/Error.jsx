//Utils
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

//Component
import Nav from '../../components/Nav/Nav'

//Style
import './Error.css'

//Function
function Error() {
  return (
    <div className="errorPage">
      <Helmet>
        <title>Mascaro.dev || Erorr 404</title>
      </Helmet>
      <Nav />
      <div className="errorBloc">
        <div className="errorNumber">
          <strong>404</strong>
        </div>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner à la page d'accueil</Link>
      </div>
    </div>
  )
}

export default Error
