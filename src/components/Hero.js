import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video from '../assets/videos/travel.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        Aos.init({})
    }, [])

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                    >
                        Alex Raymond Travels
                    </HeroH1>
                    <HeroP
                        data-aos="fade-up"
                        data-aos-delay="350"
                        data-aos-duration="1000"
                    >
                        Itenarary design focused on the ART of discovery.
                    </HeroP>
                    <Button 
                        primary='true' 
                        big='true' 
                        round='true' 
                        to='/contact'
                        data-aos="flip-up"
                        data-aos-delay="350"
                        data-aos-duration="3000"
                    >
                        Book now!
                    </Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #FFFFF0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #FFFFF0;


const HeroBg = styled.div`
    position: absolute;
    background: #fffff0;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #FFFFF0;
    line-height: 1.1;
    font-weight: bold;
`

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    font-family: 'Playfair Display';
    font-style: italic;
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
`

const HeroP = styled.p`
    font-size: clamp(1rem, 3vw, 3rem);
    font-family: 'Playfair display';
    margin-bottom: 2rem;
    font-weight: 400;
`
