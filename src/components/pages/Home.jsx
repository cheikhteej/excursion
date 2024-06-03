import React from 'react'
import HeroSection from '../HeroSection.jsx'
import Cards from '../Cards.jsx'

import '../../App.css'
import Footer from '../Footer.jsx'

function Home() {
  return (
    <div>
      <HeroSection src1="../videos/video-1.mp4" />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
