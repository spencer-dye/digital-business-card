import React from 'react'
import MailIcon from '../images/mail icon.svg'
import LinkedInIcon from '../images/linkedin.svg'

export default function Info() {
    return (
        <div>
            <div className="info__wrap">
                <h1>Spencer Dye</h1>
                <h4>Front-End Develepor</h4>
                <a href='https://spencerdye.com/' target='_blank' className='website__link'>spencerdye.com</a>
            </div>
            <div className="btn__wrap">
                <a href='mailto:sdye9699@gmail.com'><img src={MailIcon} className='btn__icon'/>Email</a>
                <a href='https://www.linkedin.com/in/spencer-dye-9679501b2/' target='_blank'><img src={LinkedInIcon} className='btn__icon'/>LinkedIn</a>
            </div>
        </div>
    )
}