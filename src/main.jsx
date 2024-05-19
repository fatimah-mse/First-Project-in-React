import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Section1 from './components/Section1.jsx'
import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import Footer from './components/footer.jsx'
import './components/nav.css'
import './components/hero.css'
import './components/section.css'
import './components/footer.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Section1 />
    <Section2 />
    <Section3 />
    <Footer />
  </React.StrictMode>,
)
