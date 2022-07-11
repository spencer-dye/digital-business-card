import React from 'react'
import Spencer from '../images/spencer.jpg'

export default function Info() {
    return (
        <div>
            <img src={Spencer} className='headshot' />
            <h1>Spencer Dye</h1>
            <h4>Front-End Develepor</h4>
            <a href='https://spencerdye.com/' target='_blank'>spencerdye.com</a>
        </div>
    )
}