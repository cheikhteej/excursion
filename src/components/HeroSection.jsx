import React from 'react'
import { Button } from './Button.jsx'

import '../App.css'
import './HeroSection.css'

function HeroSection({src1}) {
  return (
    <div className="hero-container">
      <h1>Le Sénégal vous dit ?</h1>
      <p>Bienvenue</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Réservez
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Aperçu<i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
