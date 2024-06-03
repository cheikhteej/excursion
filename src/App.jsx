import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import Excursions from './components/pages/Excursions.jsx'
import Service from './components/pages/Service.jsx'
import SignUp from './components/pages/SignUp.jsx'


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/excursions" element={<Excursions />} />
            <Route  path="/service" element={<Service />} />
            <Route  path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
  )
}

export default App
