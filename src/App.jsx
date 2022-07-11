import React from 'react'
import './styles/style.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import Spencer from './images/spencer.jpg'

export default function App() {
    return (
        <div className='card'>
            <img src={Spencer} className='headshot' />
            <main>
                <Info />
                <About />
                <Interests />
            </main>
            <Footer />
        </div>
    )
}