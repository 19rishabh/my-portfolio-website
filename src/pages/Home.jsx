import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import SkillsSection from '../components/Skills'

const Home = () => {
  return (
    <div>
        {/* Theme toggle */}
        <ThemeToggle />

        {/* Background effect */}
        <StarBackground />

        {/* Navbar */}
        <Navbar/>

        {/* Main content */}
        <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home
