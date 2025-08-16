import React from 'react'
import Navbar from './components/navbar';
import LandingPage from './components/landingPage'
import Marquee from './components/marquee'
import About from './components/about'
import Eyes from './components/eyes'
import Freatured from './components/featured'
import Cards from './components/cards'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className = 'w-full min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Freatured />
      <Cards />
      <Footer />

      
    </div>
  )
}

export default App
