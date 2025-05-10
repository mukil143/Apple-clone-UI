import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Emi from './components/Emi.jsx'
import Hero from './components/Hero.jsx'
import Watch from './components/watch.jsx'
import Productgrid from './components/Productgrid.jsx'
import Footer from './components/Footer.jsx'
import Mothersday from './components/Mothersday.jsx'



function App() {

  return (
    < section  className=' "overflow-x-hidden relative'>
      {/* <div className="fixed top-0 left-0 w-screen h-screen bg-yellow-100 z-[1000] opacity-10 pointer-events-none"></div> */}
      <Navbar/>
      <Emi/>
      <Hero/>
      <Mothersday/>
      <Watch/>
      <Productgrid/>
      <Footer/>
    </section>
  )
}

export default App
