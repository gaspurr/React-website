import React from 'react'
import './HeroSection.css'
import '../App.css';
import {Button} from './Button';

function HeroSection() {
    return (
        <div classname='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVENUTRE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns"/>
                <Button className='btns'
                ButtonStyle='btn--outline'
                ButtonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns'
                ButtonStyle='btn--primary'
                ButtonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
        </div>
    )
}

export default HeroSection