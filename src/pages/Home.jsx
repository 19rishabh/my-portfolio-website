import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'

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
        </main>
        {/* Footer */}
    </div>
  )
}

export default Home
