// src/App.jsx
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Contact from './components/Contact'


export default function App(){
return (
<div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
<Navbar />
<main className="max-w-5xl mx-auto">
<Hero />
<About />
<Skills />
<Projects />
<Experience />
<Education />
<Certifications /> 
<Resume />
<Contact />
</main>
</div>
)
}