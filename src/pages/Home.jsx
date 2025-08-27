import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'

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

        {/* Footer */}
    </div>
  )
}

export default Home
