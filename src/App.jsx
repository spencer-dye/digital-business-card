import React from 'react'
import './styles/style.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

export default function App() {
    return (
        <div>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}