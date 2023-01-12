//Utils
import React from 'react'

//Components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

//Style
import './Home.css'

function Home() {
  return (
    <div className="HomePage">
      <Header />
      <div className="titleBloc">
        <h1>Développeur Web</h1>
        <h2>Basé à Angers - France</h2>
      </div>
      <Footer />
    </div>
  )
}

export default Home
