import React from 'react'
import LinkedInIcon from '../images/linkedin.svg'
import GitHubIcon from '../images/github.svg'
import TwitterIcon from '../images/twitter.svg'
import InstagramIcon from '../images/Instagram.svg'
import FacebookIcon from '../images/Facebook.svg'

export default function Footer() {
    return (
        <footer>
            <img src={LinkedInIcon}/>
            <img src={GitHubIcon}/>
            <img src={TwitterIcon}/>
            <img src={InstagramIcon}/>
            <img src={FacebookIcon}/>
        </footer>
    )
}