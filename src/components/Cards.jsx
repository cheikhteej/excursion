import React from 'react'
import CardItem from './CardItem.jsx'

import './Cards.css'


import dk1 from '../assets/1_dk_ville.jpg'
import saly11 from '../assets/11_saly.jpg'
import sine_saloum17 from '../assets/17_sine_saloum.jpg'
import saint_louis28 from "../assets/28_saint_louis.jpg"
import lompoul26 from "../assets/26_lompoul.webp"



function Cards() {
  return (
    <div className="cards">
      <h1>Partez à la découverte de ces lieux cultes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={dk1}
              text="Découvrez Dakar sous un nouveau visage"
              label="Aventure"
              path="/sign-up"
            />
            <CardItem              
              src={sine_saloum17}
              text="le Sine-Saloum une vraie merveille"
              label="Découverte"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={saint_louis28}
              text="Saint-Louis une ville qui regorge d'histoire"
              label="Mystere"
              path="/sign-up"
            />
            <CardItem
              src={lompoul26}
              text="Partez en pleine aventure au milieu du désert de Lompoul"
              label="Aventure"
              path="/sign-up"
            />
            <CardItem
              src={saly11}
              text="Vivre en plein rêve au bord des plages à Saly"
              label="Fun"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
