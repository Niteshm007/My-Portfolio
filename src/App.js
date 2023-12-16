import React from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Skill from './Components/Skills/Skill'
import Work from './Components/Works/Work'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'

function App() {
  return (
    <div className='App'>
      <div id="Home"><Navbar/></div>
      <div id="Intro"><Intro/></div>
      <div id="Skills"><Skill/></div>
      <div id="Works"><Work/></div>
      <div id="Contact"><Contact/></div>
      <div id="About"><About/></div>
    </div>
  )
}

export default App
