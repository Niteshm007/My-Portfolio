import React from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Skill from './Components/Skills/Skill'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Project from './Components/Projects/Project'
import Themes from './Components/Themes/Themes'

function App() {
  return (
    <div className='App'>
      <div id="Home"><Navbar/></div>
      <Themes/>
      <div id="Intro"><Intro/></div>
      <div id="Education"><Education/></div>
      <div id="Skills"><Skill/></div>
      <div id="Project"><Project/></div>
      <div id="Contact"><Contact/></div>
      <div id="About"><About/></div>
    </div>
  )
}

export default App
