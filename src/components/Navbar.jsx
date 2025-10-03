// src/components/Navbar.jsx
import React from 'react'


export default function Navbar(){
return (
<nav className="fixed w-full bg-transparent z-50">
<div className="max-w-5xl mx-auto flex items-center justify-between p-6">
<div className="text-xl font-bold text-white">Abishek K</div>
<div className="space-x-6 text-gray-300 hidden md:block">
<a href="#about" className="hover:text-accent">About</a>
<a href="#projects" className="hover:text-accent">Projects</a>
<a href="#experience" className="hover:text-accent">Experience</a>
<a href="#contact" className="hover:text-accent">Contact</a>
</div>
</div>
</nav>
)
}